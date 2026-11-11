Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path "public\assets\hero-enterprise-visual.jpg"))

# Let's inspect column X=530 (Sales Overview card), Y from 420 to 520
Write-Output "Checking Sales Overview card at X=530:"
for ($y = 420; $y -le 520; $y += 5) {
    $c = $src.GetPixel(530, $y)
    Write-Output "Y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}

# Let's inspect column X=750 (Inventory Status card), Y from 420 to 520
Write-Output "`nChecking Inventory Status card at X=750:"
for ($y = 420; $y -le 520; $y += 5) {
    $c = $src.GetPixel(750, $y)
    Write-Output "Y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}

# Let's inspect column X=880 (Business Growth card), Y from 420 to 520
Write-Output "`nChecking Business Growth card at X=880:"
for ($y = 420; $y -le 520; $y += 5) {
    $c = $src.GetPixel(880, $y)
    Write-Output "Y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}

$src.Dispose()

