
#git pull
#git reset --hard origin/master
git add .
current_datetime=$(date "+%Y-%m-%d %H:%M:%S")

git commit -m "update-$current_datetime"
git push --progress "origin" master:master
#echo https://cbmland.com/Screener.html
