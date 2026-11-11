$proc = Start-Process -FilePath "npm.cmd" -ArgumentList "run","dev" -PassThru
Start-Sleep -Seconds 3

try {
    $res = Invoke-WebRequest -Uri "http://localhost:3000/" -UseBasicParsing -TimeoutSec 5
    Write-Output "Server HTTP Status: $($res.StatusCode)"
    Write-Output "Server Content Length: $($res.Content.Length)"
} catch {
    Write-Output "Request error: $_"
} finally {
    if ($proc -and -not $proc.HasExited) {
        Stop-Process -Id $proc.Id -Force
    }
    # Clean up any child vite node processes
    Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
}

