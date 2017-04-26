import 'babel-polyfill'
import Koa from 'koa'
import json from 'koa-json'
import index from './routes/'
import staticServe from 'koa-static'

const app = new Koa()

// 静态目录
const DIST = __dirname + '/dist/'
const LIB = __dirname + '/lib/'
app.use(staticServe(DIST))
app.use(staticServe(LIB))

// 传输JSON
app.use(json())

// 路由
app.use(index.routes())

const PORT = 3300
app.listen(PORT)