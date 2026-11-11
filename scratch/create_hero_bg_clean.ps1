Add-Type -AssemblyName System.Drawing

$srcPath = "public\assets\hero-enterprise-visual.jpg"
$orig = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcPath))

Write-Output "Original size: $($orig.Width) x $($orig.Height)"

# Create a high-res clean background: 1920 x 1080
$targetW = 1920
$targetH = 1080

$cleanBmp = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cleanBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# 1. Fill base canvas with enterprise white-to-light-steel gradient
$baseRect = New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)
$p1 = New-Object System.Drawing.PointF(0, 0)
$p2 = New-Object System.Drawing.PointF($targetW, $targetH)
$baseBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $p1, $p2,
    [System.Drawing.Color]::FromArgb(255, 255, 255, 255),
    [System.Drawing.Color]::FromArgb(255, 240, 245, 252)
)
$g.FillRectangle($baseBrush, $baseRect)
$baseBrush.Dispose()

# 2. Draw the 3D ecosystem on the right (from X=410 of original to 1024)
# In original 1024x576, the 3D ecosystem is X=410 to 1024, Y=70 to 510
$origEcoX = 410
$origEcoY = 70
$origEcoW = $orig.Width - $origEcoX
$origEcoH = 505 - $origEcoY

$destEcoX = [int]($targetW * 0.40)
$destEcoW = $targetW - $destEcoX
$destEcoY = 40
$destEcoH = $targetH - 60

$srcRect = New-Object System.Drawing.Rectangle($origEcoX, $origEcoY, $origEcoW, $origEcoH)
$destRect = New-Object System.Drawing.Rectangle($destEcoX, $destEcoY, $destEcoW, $destEcoH)
$g.DrawImage($orig, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# 3. Soft gradient fade on the left edge of the 3D ecosystem so it blends into the clean left text area
$fadeW = 160
for ($i = 0; $i -lt $fadeW; $i++) {
    $alpha = [int](255 * (1.0 - ($i / [float]$fadeW)))
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, ($destEcoX + $i), 0, ($destEcoX + $i), $targetH)
    $pen.Dispose()
    $brush.Dispose()
}

# 4. Fade top edge to white (first 50px)
for ($y = 0; $y -lt 50; $y++) {
    $alpha = [int](255 * (1.0 - ($y / 50.0)))
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $y, $targetW, $y)
    $pen.Dispose()
    $brush.Dispose()
}

# 5. Fade bottom edge to white (last 70px)
for ($y = 0; $y -lt 70; $y++) {
    $alpha = [int](255 * ($y / 70.0))
    $targetY = ($targetH - 70) + $y
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $targetY, $targetW, $targetY)
    $pen.Dispose()
    $brush.Dispose()
}

$g.Dispose()

$savePath = "public\assets\hero-bg-clean.jpg"
$cleanBmp.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$cleanBmp.Dispose()
$orig.Dispose()

Write-Output "Successfully generated: $savePath ($targetW x $targetH)"

