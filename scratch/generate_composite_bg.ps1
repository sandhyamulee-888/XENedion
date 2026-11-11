Add-Type -AssemblyName System.Drawing

$srcPath = "public\assets\hero-enterprise-visual.jpg"
$orig = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcPath))

$cropX = 410
$cropY = 68
$cropW = $orig.Width - $cropX
$cropH = 492 - $cropY

$targetW = 1920
$targetH = 920

$compBmp = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($compBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# 1. Base gradient: Soft light corporate silver/white
$bgRect = New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)
$pStart = New-Object System.Drawing.PointF(0, 0)
$pEnd = New-Object System.Drawing.PointF($targetW, $targetH)
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $pStart,
    $pEnd,
    [System.Drawing.Color]::FromArgb(255, 255, 255, 255),
    [System.Drawing.Color]::FromArgb(255, 243, 246, 252)
)
$g.FillRectangle($bgBrush, $bgRect)
$bgBrush.Dispose()

# 2. Draw the 3D visual on the right ~56%
$drawDestX = [int]($targetW * 0.44)
$drawDestW = $targetW - $drawDestX
$drawDestY = 20
$drawDestH = $targetH - 30

$drawDestRect = New-Object System.Drawing.Rectangle($drawDestX, $drawDestY, $drawDestW, $drawDestH)
$drawSrcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$g.DrawImage($orig, $drawDestRect, $drawSrcRect, [System.Drawing.GraphicsUnit]::Pixel)

# 3. Soft gradient fade on the left edge of the 3D visual (width 160px)
$fadeW = 160
$fadeX = $drawDestX
for ($i = 0; $i -lt $fadeW; $i++) {
    $alpha = [int](255 * (1.0 - ($i / [float]$fadeW)))
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, ($fadeX + $i), 0, ($fadeX + $i), $targetH)
    $pen.Dispose()
    $brush.Dispose()
}

# 4. Fade bottom edge into pure white
$botH = 70
for ($j = 0; $j -lt $botH; $j++) {
    $alpha = [int](255 * ($j / [float]$botH))
    $y = ($targetH - $botH) + $j
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $y, $targetW, $y)
    $pen.Dispose()
    $brush.Dispose()
}

# 5. Fade top edge into pure white
$topH = 30
for ($k = 0; $k -lt $topH; $k++) {
    $alpha = [int](255 * (1.0 - ($k / [float]$topH)))
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $k, $targetW, $k)
    $pen.Dispose()
    $brush.Dispose()
}

$g.Dispose()

$compPath = "public\assets\hero-bg-composite.png"
$compBmp.Save($compPath, [System.Drawing.Imaging.ImageFormat]::Png)
$compBmp.Dispose()
$orig.Dispose()

Write-Output "Successfully generated: $compPath ($targetW x $targetH)"

