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

# 方法1：代码编译、运行服务
npm run watch
npm run dev

# 方法2：vscode debug 运行 index.ts
```

# Docker 部署

获取 [TG_TOKEN](https://core.telegram.org/bots#3-how-do-i-create-a-bot)

## 本地构建

```sh
# 构建镜像
docker build -t ringcrl/chenng_rss_bot .

# 发布镜像
docker push ringcrl/chenng_rss_bot
```

## Github Actions 构建

修改 .github/workflows/docker.yml 文件，部署到自己的 Docker Hub

## 服务端

### 部署

```sh
docker pull ringcrl/chenng_rss_bot:latest
docker run --name chenng_rss_bot \
  -d -v /var/data:/app/data/ \
  -e RSSBOT_TOKEN=<TG_TOKEN> \
  ringcrl/chenng_rss_bot
```

### 更新

```sh
# 查找容器
docker ps

# 使用 -f 停止并删除容器
docker container rm -f 26cd26b1a5d5

# 按照上一步【部署】，重新启动容器
```
