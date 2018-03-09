const Koa = require('koa')
const Router = require('koa-router')
const statics = require('koa-static')
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')
const url = require('url')
const history = require('koa2-connect-history-api-fallback')

const app = new Koa()
const router = new Router()
const sourceUrl = 'http://m.cnbeta.com'
function sleep(ms = 0) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

router.get('/api/cnbeta', async (ctx, next) => {
  ctx.body = await axios.get(sourceUrl + '/wap').then(async res => {
    const $ = cheerio.load(res.data)
    const data = []
    $('.list > a').each((index, value) => {
      const dom = $(value)
      const re = /view\/(\w*)\.htm/
      const postUrl = sourceUrl + dom.attr('href')
      data.push({
        id: re.exec(postUrl)[1],
        title: dom.text(),
        url: postUrl,
      })
    })
    // await sleep(1000 * 5)
    return data
  })
})

router.get('/api/cnbeta/:id', async (ctx, next) => {
  const id = ctx.params.id
  const postUrl = `${sourceUrl}/wap/view/${id}.htm`
  ctx.body = await axios.get(postUrl).then(res => {
    const $ = cheerio.load(res.data)
    const data = {
      title: $('.title').html(),
      content: $('.content').html(),
    }
    const urlPattern = /https?:\/\/static\.cnbetacdn.+?\.(jpe?g|png|webp|gif)/g
    data.content = data.content.replace(
      urlPattern,
      str => `/api/image?url=${str}&srcUrl=http://m.cnbeta.com`,
    )
    return data
  })
})

function getHostName(uri) {
  if (uri == undefined) {
    return null
  }
  var parsedUrl = url.parse(uri)
  if (parsedUrl == null || parsedUrl == '' || parsedUrl == undefined) {
    return null
  }

  return parsedUrl.protocol + '//' + parsedUrl.host
}

router.get('/api/image', async (ctx, next) => {
  const query = url.parse(ctx.req.url, true).query
  const imgUrl = query.url

  console.log('get a request for ' + imgUrl)
  if (!imgUrl) return ctx.throw(400, 'image url required')

  const referrer = getHostName(query.srcUrl) || getHostName(imgUrl)
  const config = {
    method: 'get',
    url: imgUrl,
    headers: {
      Referer: referrer,
    },
		responseType:'stream'
  }

  ctx.body = await axios(config).then(res => res.data)
  // console.log(typeof ctx.body)
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(history({whkteList: ['/api']}))
  .use(statics(path.join(__dirname, '../dist')))

module.exports = app
