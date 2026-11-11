$proc = Start-Process -FilePath "cmd.exe" -ArgumentList "/c npx vite --port 3000" -PassThru
Start-Sleep -Seconds 4

node scratch/test_fetch.cjs

if ($proc -and -not $proc.HasExited) {
    Stop-Process -Id $proc.Id -Force
}
Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*vite*" } | Stop-Process -Force -ErrorAction SilentlyContinue
