@echo off
git add .
:: Ввод данных:
set /p Data="Data: "

git commit -m echo"%Data%"
git push
pause>nul