Add-Type -AssemblyName System.Drawing

$srcPath = "public\assets\hero-enterprise-visual.jpg"
if (-not (Test-Path $srcPath)) {
    Write-Error "Source image not found: $srcPath"
    exit 1
}

$orig = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcPath))
Write-Output "Original dimensions: $($orig.Width) x $($orig.Height)"

# 1. Export the 3D Ecosystem scene (Right visual: Retail store, Warehouse, Cloud, POS terminal, Floating Cards)
# Source bounds in 1024x576:
# Top mock navbar is roughly 0..72px.
# Left copy is roughly 0..440px.
# 3D Ecosystem is roughly X=440..1024, Y=70..570.
$cropX = 440
$cropY = 70
$cropW = $orig.Width - $cropX
$cropH = $orig.Height - $cropY - 10

$rightScene = New-Object System.Drawing.Bitmap($cropW, $cropH)
$g1 = [System.Drawing.Graphics]::FromImage($rightScene)
$g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g1.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g1.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$srcRect1 = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$destRect1 = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
$g1.DrawImage($orig, $destRect1, $srcRect1, [System.Drawing.GraphicsUnit]::Pixel)
$g1.Dispose()

$rightScenePath = "public\assets\hero-3d-ecosystem.png"
$rightScene.Save($rightScenePath, [System.Drawing.Imaging.ImageFormat]::Png)
$rightScene.Dispose()
Write-Output "Saved 3D ecosystem visual: $rightScenePath ($cropW x $cropH)"

# 2. Also create a high-definition 1920x960 composite background
# Where the left 44% has a clean white-to-light-steel enterprise gradient for text,
# and the right 56% shows the 3D ecosystem seamlessly blended.
$targetW = 1920
$targetH = 960

$compBmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g2 = [System.Drawing.Graphics]::FromImage($compBmp)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

# Background fill with light enterprise gradient
$bgRect = New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)
$pStart = New-Object System.Drawing.PointF(0, 0)
$pEnd = New-Object System.Drawing.PointF($targetW, $targetH)
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $pStart,
    $pEnd,
    [System.Drawing.Color]::FromArgb(255, 255, 255, 255),
    [System.Drawing.Color]::FromArgb(255, 240, 244, 250)
)
$g2.FillRectangle($bgBrush, $bgRect)
$bgBrush.Dispose()

# Draw the 3D visual on the right
$drawDestX = [int]($targetW * 0.40)
$drawDestW = $targetW - $drawDestX
$drawDestY = 20
$drawDestH = $targetH - 30

$drawDestRect = New-Object System.Drawing.Rectangle($drawDestX, $drawDestY, $drawDestW, $drawDestH)
$drawSrcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$g2.DrawImage($orig, $drawDestRect, $drawSrcRect, [System.Drawing.GraphicsUnit]::Pixel)

# Blend the transition between left text area and right visual with a smooth white-to-transparent gradient
$fadeW = 180
$fadeX = $drawDestX - 20
for ($i = 0; $i -lt $fadeW; $i++) {
    $alpha = [int](255 * (1.0 - ($i / $fadeW)))
    $col = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
    $pen = New-Object System.Drawing.Pen($col, 1)
    $g2.DrawLine($pen, ($fadeX + $i), 0, ($fadeX + $i), $targetH)
    $pen.Dispose()
}

$g2.Dispose()

$compPath = "public\assets\hero-bg-composite.png"
$compBmp.Save($compPath, [System.Drawing.Imaging.ImageFormat]::Png)
$compBmp.Dispose()
Write-Output "Saved composite hero background: $compPath ($targetW x $targetH)"

$orig.Dispose()

