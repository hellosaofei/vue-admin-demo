# 该文件用于简化每日提交远程仓库的步骤
# 直接在bash 命令行中输入bash push.sh 【commit Info】即可完成代码提交

#!/bin/bash

info="$1"

git add .
git commit -m "${info}"

git push github develop
