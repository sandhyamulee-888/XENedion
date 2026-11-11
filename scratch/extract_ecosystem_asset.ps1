Add-Type -AssemblyName System.Drawing

$srcPath = "public\assets\hero-enterprise-visual.jpg"
$orig = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcPath))

# Bounds in 1024x576:
# Top mock navbar is 0..68px
# Left copy is 0..385px
# Ecosystem illustration is roughly X=390..1024, Y=70..500
$cropX = 390
$cropY = 70
$cropW = $orig.Width - $cropX # 634
$cropH = 500 - $cropY        # 430

Write-Output "Extracting ecosystem: X=$cropX, Y=$cropY, W=$cropW, H=$cropH"

# 2x Retina scale: 1268 x 860
$outW = $cropW * 2
$outH = $cropH * 2

$bmp = New-Object System.Drawing.Bitmap($outW, $outH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $outW, $outH)
$g.DrawImage($orig, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# 1. Soft feather on Left Edge (first 90px in 2x scale) so it seamlessly blends into the light left column
for ($x = 0; $x -lt 90; $x++) {
    $alpha = [int](255 * (1.0 - ($x / 90.0)))
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, $x, 0, $x, $outH)
    $pen.Dispose()
    $brush.Dispose()
}

# 2. Soft feather on Right Edge (last 30px)
for ($x = 0; $x -lt 30; $x++) {
    $alpha = [int](255 * ($x / 30.0))
    $targetX = ($outW - 30) + $x
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, $targetX, 0, $targetX, $outH)
    $pen.Dispose()
    $brush.Dispose()
}

# 3. Soft feather on Top Edge (first 30px)
for ($y = 0; $y -lt 30; $y++) {
    $alpha = [int](255 * (1.0 - ($y / 30.0)))
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $y, $outW, $y)
    $pen.Dispose()
    $brush.Dispose()
}

# 4. Soft feather on Bottom Edge (last 50px) to remove any dark base vignette and melt into white/light grey
for ($y = 0; $y -lt 50; $y++) {
    $alpha = [int](255 * ($y / 50.0))
    $targetY = ($outH - 50) + $y
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $targetY, $outW, $targetY)
    $pen.Dispose()
    $brush.Dispose()
}

$g.Dispose()

$savePathPub = "public\assets\xenedion-ecosystem-visual.png"
$savePathSrc = "src\assets\xenedion-ecosystem-visual.png"
$bmp.Save($savePathPub, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save($savePathSrc, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$orig.Dispose()

Write-Output "Successfully created: $savePathPub and $savePathSrc ($outW x $outH)"

