Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path "public\assets\hero-enterprise-visual.jpg"))
Write-Output "Full size: $($src.Width) x $($src.Height)"

# Let's inspect where elements are located:
# In the original 1024x576:
# Where is the cloud? The cloud has "XENedion" with the orange swoop in the top center.
# Where is the Retail Store icon and store front?
# Where is the Head Office?
# Let's create multiple crops or check the exact boundary:
# Crop A: From X=360 to 1024 (width 664) - captures the entire Retail Store awning and building
# Crop B: From X=400 to 1024 (width 624)
# Crop C: From X=440 to 1024 (width 584)

$cropList = @(
    @{ name = "crop_360"; x = 360; y = 65; w = (1024 - 360); h = (576 - 65) },
    @{ name = "crop_400"; x = 400; y = 65; w = (1024 - 400); h = (576 - 65) },
    @{ name = "crop_440"; x = 440; y = 65; w = (1024 - 440); h = (576 - 65) }
)

foreach ($c in $cropList) {
    $bmp = New-Object System.Drawing.Bitmap($c.w, $c.h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $srcRect = New-Object System.Drawing.Rectangle($c.x, $c.y, $c.w, $c.h)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $c.w, $c.h)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $savePath = "public\assets\" + $c.name + ".png"
    $bmp.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved $savePath"
}

$src.Dispose()

