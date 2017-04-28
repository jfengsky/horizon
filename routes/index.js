import Router from 'koa-router'

import clientTpl from '../views/clientTpl'

import {pagetType} from '../src/config/apis'

const index = new Router()

index.get('/', async ctx => {
  ctx.body = clientTpl
  // await ctx.send({index: 'index'})
})

// 页面类型
index.post(pagetType, async ctx => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body
})

export default index
