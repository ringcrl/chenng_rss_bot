# ringcrl/node-rss-bot

```sh
使用方法：/rss 输出订阅列表 加 raw 显示链接
使用方法：/sub <RSS URL>
使用方法：/unsub <RSS URL>
使用方法：/unsubthis 回复想要退订的 RSS 消息
使用方法：/allunsub 退订所有源
使用方法：/import 回复这条消息或者直接发 opml 文档
使用方法：/export 导出 opml 格式订阅源
使用方法：/viewall 查看所有订阅和订阅人数 需要在设置中打开，加 `raw` 显示链接
使用方法：/lang 更改语言
使用方法：/heath 展示活跃订阅源的健康程度
```

# 本地开发

```sh
# 参考 .env.example 配置 .env

# 代码编译
npm run watch

# 运行服务
npm run dev
```

# Docker 部署

获取 [TG_TOKEN](https://core.telegram.org/bots#3-how-do-i-create-a-bot)

## 手动部署

### 构建镜像

```sh
docker build -t ringcrl/node-rss-bot .
```

### 发布镜像

```sh
docker push ringcrl/node-rss-bot
```

## Github Actions 部署

修改 .github/workflows/docker.yml 文件，部署到自己的 Docker Hub

## 服务端

### 部署

```sh
docker pull ringcrl/node-rss-bot
docker run --name node-rss-bot \
  -d -v /var/data:/app/data/ \
  -e RSSBOT_TOKEN=<TG_TOKEN> \
  ringcrl/node-rss-bot
```

### 更新

```sh
# 查看镜像
docker images

# 拉取最新镜像
docker pull ringcrl/node-rss-bot

# 查找容器
docker ps

# 停止容器
docker kill 26cd26b1a5d5

# 删除容器
docker rm 26cd26b1a5d5

# 重新创建容器
docker run --name node-rss-bot \
  -d -v /var/data:/app/data/ \
  -e RSSBOT_TOKEN=<TG_TOKEN> \
  ringcrl/node-rss-bot
```
