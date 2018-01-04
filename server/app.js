const Koa = require('koa')
const Router = require('koa-router')
const Statics = require('koa-static')
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')

const app = new Koa()
const router = new Router()
const url = 'http://m.cnbeta.com'

app.use(Statics(path.join(__dirname, '../dist')))
// router.get('/', async function(ctx) {})

router.get('/cnbeta/api', async (ctx, next) => {
  ctx.body = await axios.get(url + '/wap').then(res => {
    const $ = cheerio.load(res.data)
    const data = []
    $('.list > a').each((index, value) => {
      const dom = $(value)
      const re = /view\/(\w*)\.htm/
      const postUrl = url + dom.attr('href')
      data.push({
        id: re.exec(postUrl)[1],
        title: dom.text(),
        url: postUrl
      })
    })
    return data
  })
})

router.get('/cnbeta/api/:id', async (ctx, next) => {
  const id = ctx.params.id
  const postUrl = `${url}/wap/view/${id}.htm`
  ctx.body = await axios.get(postUrl).then(res => {
    const $ = cheerio.load(res.data)
    const data = {
      title: $('.title').html(),
      content: $('.content').html()
    }
    data.content = data.content.replace(/(http)s:\/\/static/g, '$1://static')
    return data
  })
})

app.use(router.routes()).use(router.allowedMethods())

module.exports = app
