Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path "src\assets\xenedion-ecosystem-visual.png"))

# Save as high-quality JPEG (quality 92)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]92)

$jpgPathSrc = "src\assets\xenedion-ecosystem-visual.jpg"
$jpgPathPub = "public\assets\xenedion-ecosystem-visual.jpg"
$src.Save($jpgPathSrc, $jpegCodec, $encoderParams)
$src.Save($jpgPathPub, $jpegCodec, $encoderParams)

$src.Dispose()

$sJpg = (Get-Item $jpgPathSrc).Length
Write-Output "Optimized JPEG created: $jpgPathSrc ($sJpg bytes)"

