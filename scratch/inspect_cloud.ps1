Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path "public\assets\hero-enterprise-visual.jpg"))

# Let's check Y=200, X from 400 to 550
Write-Output "Y=200 (around Retail Stores badge):"
for ($x = 420; $x -le 520; $x += 10) {
    $c = $src.GetPixel($x, 200)
    Write-Output "X=$x : R=$($c.R), G=$($c.G), B=$($c.B)"
}

# In original, where is the top navbar?
Write-Output "`nChecking Y from 0 to 100 at X=500:"
for ($y = 0; $y -le 100; $y += 10) {
    $c = $src.GetPixel(500, $y)
    Write-Output "Y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}

$src.Dispose()

