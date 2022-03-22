#所依靠的基础镜像
FROM node:14.6.0
# 创建容器内的项目存放目录
RUN mkdir -p /home/nodejs
WORKDIR /home/nodejs
COPY . /home/nodejs
RUN npm install --registry https://registry.npm.taobao.org

#对外连接的端口号
EXPOSE 8080
#容器启动命令
CMD ["npm","start"]
CMD ["npm","run","dev"]