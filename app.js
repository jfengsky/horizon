import 'babel-polyfill'
import Koa from 'koa'
import json from 'koa-json'
import index from './routes/'
import staticServe from 'koa-static'
import bodyParser from 'koa-bodyparser'
import send from 'koa-send'
const app = new Koa()

// 静态目录
const DIST = __dirname + '/dist/'
const LIB = __dirname + '/node_modules/'
app.use(staticServe(DIST))
app.use(staticServe(LIB))

// 传输JSON
app.use(json())
app.use(bodyParser())

// 路由
app.use(index.routes())

// 发送文件
app.use(async (ctx, next) => {
  ctx.send = send
  await next()
})

const PORT = 3300
app.listen(PORT, () => console.log(`start server http://localhost:${PORT}`))