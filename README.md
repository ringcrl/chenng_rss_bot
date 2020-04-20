# ringcrl/node_rss_bot

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

# Docker 部署

获取 [TG_TOKEN](https://core.telegram.org/bots#3-how-do-i-create-a-bot)

## 构建镜像

```sh
docker build -t ringcrl/node_rss_bot .
```

## 发布镜像

```sh
docker push ringcrl/node_rss_bot
```

## 服务端部署

```sh
docker pull ringcrl/node_rss_bot
docker run --name node_rss_bot -d -v /var/data:/app/data/ -e RSSBOT_TOKEN=<TG_TOKEN> ringcrl/node_rss_bot
```

## 服务端更新

```sh
# 查看镜像
docker images

# 拉取最新镜像
docker pull ringcrl/node_rss_bot

# 查找容器
docker ps

# 停止容器
docker kill 26cd26b1a5d5

# 删除容器
docker rm 26cd26b1a5d5

# 重新创建容器
docker run --name node_rss_bot -d -v /var/data:/app/data/ -e RSSBOT_TOKEN=<TG_TOKEN> ringcrl/node_rss_bot
```

# PM2 部署

- 首先要有 Node.js 和 npm 或 yarn
- 克隆仓库 `git clone https://github.com/ringcrl/NodeRSSBot.git`
- 设置 RSSBOT_TOKEN 环境变量，或者直接在 config.ts 中修改
- 安装依赖 在仓库根目录运行 `npm i`
- 编译 `npm run build`
- 如果你想节省些空间，你可以运行 `npm prune --production` 把 build 所需的依赖清掉
- 推荐用 pm2 守护进程 `pm2 start npm --name node_rssbot -- start` 如果没有安装 pm2 就先安装 `npm i -g pm2` 或者直接 `npm start`

# 配置项

所有配置项都可以用环境变量或者直接在 config.ts 中修改
