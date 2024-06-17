
# # 当发生错误时中止脚本
# # set -e

# # 构建
# # npm run build

# # cd 到构建输出的目录下
# # cd dist

# # 部署到自定义域域名
# # echo 'www.example.com' > CNAME

# # git init


# # 部署到 https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# git add remote origin https://github.com/hellosaofei/vue2-backstage-1.git
# git branch develop1
# git checkout develop1
# git add -A
# git commit -m 'deploy'
# git push origin develop1
# # 部署到 https://<USERNAME>.github.io/<REPO>
# # git push -f git@github.com:hellosaofei/vue2-backstage-1.git master:gh-pages

# # cd -

# npm run build 

# cd dist 

# git add .
# git commit -m 'deploy'
# git push origin master



#强制推送
#!/usr/bin/env bash

# 出现错误时立即退出shell脚本的执行
set -e

info="$1"

npm run build
cd dist
# 用于防止github pages的jekyll行为
touch .nojekyll
# 在 dist 目录下生成一个新的git 仓库
git init
# 向新的git 仓库中添加内容
git add -A
git commit -m "${info}"
# 将该git仓库中的内容提交到指定的仓库，并指定具体分支
# git push -f "https://github.com/hellosaofei/vue2-test.git" master:deploy

git push -f "https://github.com/hellosaofei/vue-admin-demo.git" master:deploy
# 提交结束后，退出dist子目录，返回项目根目录
cd -
# 生成一个新的 bash 窗口
exec /bin/bash