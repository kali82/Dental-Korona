@echo off
setlocal

cd /d "%~dp0\.."

if not exist "artifacts\beehive-dental\node_modules\vite\dist\node\index.js" (
  echo Missing local dependencies.
  echo Run from the repository root:
  echo   corepack enable pnpm
  echo   pnpm.cmd install
  exit /b 1
)

node scripts\dev-beehive-local.mjs
