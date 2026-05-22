# Rebuild site.css after editing style.css or fonts.css
$cssDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Get-Content "$cssDir\fonts.css", "$cssDir\bootstrap.min.css", "$cssDir\style.css" |
  Set-Content -Encoding UTF8 "$cssDir\site.css"
Write-Host "Built $cssDir\site.css"
