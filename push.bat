@echo off
cls
Color 0C
title GitHub Pushing
set /p COM=Commit message: 
git add *
git commit -m "%COM%"
git pull origin main
git push origin main
@echo ----------------------------------------------------------------------------------------
git status
@echo ----------------------------------------------------------------------------------------

Color 0A
@echo Pushed and Committed succesfully (%COM%)

@echo ----------------------------------------------------------------------------------------
setlocal
:PROMPT
SET /P EXIT=Exit? (y/n)
IF /I "%EXIT%" NEQ "Y" GOTO EEND

exit
:EEND
push


endlocal
