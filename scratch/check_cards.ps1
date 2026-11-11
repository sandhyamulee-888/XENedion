Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path "public\assets\hero-enterprise-visual.jpg"))

# Where are the 3 floating cards?
# Card 1: "Sales Overview"
# Card 2: "Inventory Status"
# Card 3: "Business Growth"
# Let's inspect their Y position in the original 1024x576 image:
# In the original image, where is the text "Sales Overview"?
# Let's test a slice from Y=380 to Y=520, X from 450 to 950.
$bmp = New-Object System.Drawing.Bitmap(500, 140)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($src, 0, 0, (New-Object System.Drawing.Rectangle(450, 380, 500, 140)), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$bmp.Save("public\assets\cards_slice.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$src.Dispose()

Write-Output "Saved cards_slice.png"

