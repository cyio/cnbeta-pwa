const Koa = require('koa')
const Router = require('koa-router')
const axios = require('axios')
const cheerio = require('cheerio')

const app = new Koa()
const router = new Router()

const PORT = 8081

router.get('/api/cnbeta', async (ctx, next) => {
  const url = 'http://m.cnbeta.com'
  ctx.body = await axios.get(url + '/wap').then(res => {
    const $ = cheerio.load(res.data)
    const data = []
    $('.list > a').each((index, value) => {
      const dom = $(value)
      data.push({
        title: dom.text(),
        url: url + dom.attr('href')
      })
    })
    return data
  });
});

app
	.use(router.routes())
	.use(router.allowedMethods())
  .listen(PORT)

console.log(`API started on port ${PORT}`);
