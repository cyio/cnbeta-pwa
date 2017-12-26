const Koa = require('koa')
const Router = require('koa-router')
const axios = require('axios')
const cheerio = require('cheerio')

const app = new Koa()
const router = new Router()

const PORT = 8081
const url = 'http://m.cnbeta.com'

router.get('/api/cnbeta', async (ctx, next) => {
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
  });
});

router.get('/api/cnbeta/:id', async (ctx, next) => {
  const id = ctx.params.id
  const postUrl = `${url}/wap/view/${id}.htm`
  ctx.body = await axios.get(postUrl).then(res => {
    const $ = cheerio.load(res.data)
    const data =  {
      title: $('.title').html(),
      content: $('.content').html()
    }
		data.content = data.content.replace(/(http)s:\/\/static/g, '$1://static')
    return data
  });
});

app
	.use(router.routes())
	.use(router.allowedMethods())
  .listen(PORT)

console.log(`API started on port ${PORT}`);
