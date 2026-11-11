Add-Type -AssemblyName System.Drawing

$srcPath = "public\assets\hero-enterprise-visual.jpg"
$orig = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcPath))

$cropX = 390
$cropY = 74
$cropW = 1010 - $cropX # 620
$cropH = 495 - $cropY  # 421

Write-Output "Cropping 3D Ecosystem: X=$cropX, Y=$cropY, W=$cropW, H=$cropH"

# Retina 2x scale: 1240 x 842
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

# 1. Soft feather on Left Edge (first 90px) to blend into white/light grey
for ($x = 0; $x -lt 90; $x++) {
    $alpha = [int](255 * (1.0 - ($x / 90.0)))
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, $x, 0, $x, $outH)
    $pen.Dispose()
    $brush.Dispose()
}

# 2. Soft feather on Right Edge (last 50px)
for ($x = 0; $x -lt 50; $x++) {
    $alpha = [int](255 * ($x / 50.0))
    $targetX = ($outW - 50) + $x
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, $targetX, 0, $targetX, $outH)
    $pen.Dispose()
    $brush.Dispose()
}

# 3. Soft feather on Top Edge (first 40px)
for ($y = 0; $y -lt 40; $y++) {
    $alpha = [int](255 * (1.0 - ($y / 40.0)))
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $y, $outW, $y)
    $pen.Dispose()
    $brush.Dispose()
}

# 4. Soft feather on Bottom Edge (last 60px) to eliminate any dark shadow edge
for ($y = 0; $y -lt 60; $y++) {
    $alpha = [int](255 * ($y / 60.0))
    $targetY = ($outH - 60) + $y
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $brush = New-Object System.Drawing.SolidBrush($col)
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $targetY, $outW, $targetY)
    $pen.Dispose()
    $brush.Dispose()
}

$g.Dispose()

$savePath = "public\assets\hero-3d-ecosystem.png"
$bmp.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$orig.Dispose()

Write-Output "Successfully updated 3D Ecosystem visual: $savePath ($outW x $outH)"

