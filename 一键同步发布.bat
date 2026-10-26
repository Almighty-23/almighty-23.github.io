@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ==========================================
echo 正在将最新文章与修改同步到 GitHub 网站...
echo ==========================================
git add .
git commit -m "docs: update posts and site content"
git push origin main
echo.
echo ✅ 同步完成！约 30 秒后访问 https://almighty-23.github.io/ 即可看到最新内容。
pause
