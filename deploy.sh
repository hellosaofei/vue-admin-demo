
# 当发生错误时中止脚本
# set -e

# 构建
# npm run build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init


# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
git add remote origin https://github.com/hellosaofei/vue2-backstage-1.git
git branch develop1
git checkout develop1
git add -A
git commit -m 'deploy'
git push origin develop1
# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:hellosaofei/vue2-backstage-1.git master:gh-pages

# cd -
