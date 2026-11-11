Add-Type -AssemblyName System.Drawing

$srcPath = "public\assets\hero-enterprise-visual.jpg"
$orig = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcPath))

# Let's inspect coordinates:
# We want to capture the 3D ecosystem:
# Left starts around X=420 (giving a little breathing room to the left of the retail store)
# Right goes to X=1024
# Top starts at Y=68 (skipping the dark edge and top navbar)
# Bottom stops at Y=492 (before the dark bottom vignette starts)

$cropX = 410
$cropY = 68
$cropW = $orig.Width - $cropX # 614 px
$cropH = 492 - $cropY        # 424 px

Write-Output "Cropping region: X=$cropX, Y=$cropY, W=$cropW, H=$cropH"

# We will create a high-res version: 1228 x 848 (2x scale for crisp retina display)
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

# Now apply soft feathering on the edges so it melts into the light background:
# 1. Left edge feather (X: 0 to 120 px in outW)
for ($x = 0; $x -lt 120; $x++) {
    $factor = 1.0 - ($x / 120.0) # 1 at edge, 0 at 120px
    $alpha = [int](255 * $factor)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, $x, 0, $x, $outH)
    $pen.Dispose()
    $brush.Dispose()
}

# 2. Bottom edge feather (Y: outH - 100 to outH) to cleanly fade out the dark base into white/light-grey
$fadeH = 90
for ($y = 0; $y -lt $fadeH; $y++) {
    $factor = $y / [float]$fadeH # 0 to 1
    $alpha = [int](255 * $factor)
    $targetY = ($outH - $fadeH) + $y
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $targetY, $outW, $targetY)
    $pen.Dispose()
    $brush.Dispose()
}

# 3. Top edge feather (Y: 0 to 40)
for ($y = 0; $y -lt 40; $y++) {
    $factor = 1.0 - ($y / 40.0)
    $alpha = [int](255 * $factor)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
    $pen = New-Object System.Drawing.Pen($brush, 1)
    $g.DrawLine($pen, 0, $y, $outW, $y)
    $pen.Dispose()
    $brush.Dispose()
}

$g.Dispose()

$savePath = "public\assets\hero-3d-ecosystem.png"
$bmp.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$orig.Dispose()

Write-Output "Successfully generated: $savePath ($outW x $outH)"

