@echo off
 
 git add .
:: Ввод данных:
set /p Data="Data: "
 
:: "Идентификация" данных:

git commit -m echo"%Data%"
:: git push
pause>nul