import Router from 'koa-router'

import clientTpl from '../views/clientTpl'
const index = new Router()

index.get('/', async ctx => {
  ctx.body = clientTpl
  // await ctx.send({index: 'index'})
})

export default index
