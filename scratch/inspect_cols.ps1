Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path "public\assets\hero-enterprise-visual.jpg"))

# Let's inspect column X from 350 to 480 at Y=300 (where the description text ends)
Write-Output "Inspecting X from 360 to 460 at Y=280..."
for ($x = 360; $x -le 460; $x += 10) {
    $c = $src.GetPixel($x, 280)
    Write-Output "X=$x : R=$($c.R), G=$($c.G), B=$($c.B)"
}

Write-Output "`nInspecting Y=420 (buttons / bottom row)..."
for ($x = 360; $x -le 460; $x += 10) {
    $c = $src.GetPixel($x, 420)
    Write-Output "X=$x : R=$($c.R), G=$($c.G), B=$($c.B)"
}

$src.Dispose()

