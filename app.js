import 'babel-polyfill'
import Koa from 'koa'
import json from 'koa-json'
import index from './routes/'
const app = new Koa()

// 传输JSON
app.use(json())

// 路由
app.use(index.routes())

const PORT = 3300
app.listen(PORT)