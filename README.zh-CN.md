# egg demo

## 启动命令
npm run dev 默认端口 7001
访问地址： 127.0.0.1

## live reload
- 打开vscode的 live server 插件 (编辑器底栏有个port字样，或者 Go Live 字样)
- 启用浏览器的 live server 插件(敏感操作时请禁用该插件)
    - 点击设置浏览器的插件，勾选 live reload 开关 以及 i dont't want to proxy setup
    - Actual Server Address 使用 egg 的访问地址，默认 127.0.0.1:7001
    - Live Server Address 使用 live server 的地址，默认 127.0.0.1:5500
    - 完成以上操作点击 apply 即可
- 访问 127.0.0.1:7001 (不可使用localhost，即要与 Actual Server Address 设置的相同)

## 其他开发注意
- Mock 数据暂时先丢在 app/mock/yx/index.js 中，可以自行添加数据
- 后端模板使用 nunjucks 渲染 https://nunjucks.bootcss.com/
- 遇到 无法使用 127.0.0.1:7001 的时候，重新使用 npm run dev 启动服务器
