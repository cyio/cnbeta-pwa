# cnbeta-pwa

线上访问：[Cnbeta Lite](https://cnbeta.oaker.bid/)

## 说明

* 后端 api 从 [移动版_cnBeta.COM](http://m.cnbeta.com/wap) 爬取数据
* 前端由[vuejs-templates/pwa](https://github.com/vuejs-templates/pwa) 创建，基于这个目录结构改造支持 leancloud 部署

提供接口：
- `/api/cnbeta` 列表
- `/api/cnbeta/:id` 详情
- `/api/proxy` 反向代理

原理：
- DOM 解析使用 cheerio
- 图片防盗链: 中转请求指定 referrer
- 反向代理，修改 CORS header

## 开发

安装依赖，在项目根目录下 
```sh
yarn
```

本地开发启动后端
```sh
lean up
```
或者不使用 leancloud
```sh
yarn dev
```
启动前端
```sh
yarn dev:web
```

## 部署
```sh
lean deploy
```
