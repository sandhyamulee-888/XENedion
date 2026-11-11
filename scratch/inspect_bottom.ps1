Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path "public\assets\hero-enterprise-visual.jpg"))
Write-Output "Checking bottom Y from 500 to 575 at X=500:"
for ($y = 500; $y -le 575; $y += 10) {
    $c = $src.GetPixel(500, $y)
    Write-Output "Y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}
$src.Dispose()

