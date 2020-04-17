# ringcrl/node_rss_bot

```sh
/rss       # 显示订阅列表，加 `raw` 显示链接
/sub       # 订阅 RSS: /sub http://example.com/feed.xml 支持自动检测 RSS feed
/unsub     # 退订 RSS: /unsub http://example.com/feed.xml 或者通过键盘
/unsubthis # 回复一个 RSS 发来的消息退订该 RSS
/allunsub  # 退订所有源
/import    # 回复此消息 opml 文件导入订阅(群组)
/export    # 导出订阅到 opml 文件
/viewall   # 查看所有订阅和订阅人数 需要在设置中打开
/lang      # 更改语言
/heath     # 展示活跃订阅源的健康程度
```

# Docker 部署

获取 [TG_TOKEN](https://core.telegram.org/bots#3-how-do-i-create-a-bot)

## 本地构建

- 安装 Docker
- 克隆仓库：`git clone https://github.com/ringcrl/NodeRSSBot.git`
- 构建 docker image：`docker build .`，查看 image id：`docker images`
- 运行：`docker run --name node_rss_bot -d -e RSSBOT_TOKEN=<TG_TOKEN> <IMAGE_ID>`

## 服务端部署

```sh
docker pull ringcrl/node_rss_bot
docker run --name node_rss_bot -d -v /var/data:/app/data/ -e RSSBOT_TOKEN=<TG_TOKEN> ringcrl/node_rss_bot
```

# PM2 部署

- 首先要有 Node.js 和 npm 或 yarn
- 克隆仓库 `git clone https://github.com/ringcrl/NodeRSSBot.git`
- 设置 RSSBOT_TOKEN 环境变量，或者直接在 config.ts 中修改
- 安装依赖 在仓库根目录运行npm i
- 编译 npm run build
- 如果你想节省些空间，你可以运行npm prune --production 把 build 所需的依赖清掉
- 推荐用 pm2 守护进程 `pm2 start npm --name node_rssbot -- start` 如果没有安装pm2 就先安装 `npm i -g pm2` 或者直接 `npm start`

# 配置项

所有配置项都可以用环境变量或者直接在 config.ts 中修改
