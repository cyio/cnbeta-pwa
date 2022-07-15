<template lang="pug">
.home-view
  .msg(v-if='msg' @click="handleMsgClick") {{msg}}
  .list
    .item(v-for='item in list || skeletonList')
      .link(@click="go({name: 'Post', params: { id: item.id }})", :title='item.title', v-if='list') {{item.title}}
</template>

<script>
import mixin from '@/mixin.js'
import axios from 'axios'
import { handleBackButton } from '../utils'
// axios.defaults.timeout = 1000 * 5
let fetchCount = 0
const maxFetchTimes = 15
export default {
  name: 'List',
  mixins: [mixin],
  data () {
    return {
      list: null,
      listNew: [],
      msg: ''
    }
  },
  methods: {
    getPostId (url) {
      const re = /view\/(\w*)\.htm/
      return re.exec(url)[1]
    },
    getList (timeoutMs = 5000) {
      // if (inSleepTime()) {
      // this.msg = '应用休眠中，服务时间 6:00 - 24:00'
      // this.hideLoading()
      // return
      // }
      fetchCount++
      return axios.get('https://vercel-server-bit.vercel.app/api/cnbeta/list', { timeout: timeoutMs })
        .then(res => {
          this.msg = null
          this.hideLoading()
          return res.data
        })
        .catch(async err => {
          console.log('Fetch Error :-S', err)
          if (/400|503/.test(err.status)) {
            console.log('Looks like there was a problem. Status Code: ' + err.status)
            this.msg = `${err.status}: ${err.message}`
            return
          }

          if (fetchCount <= maxFetchTimes) {
            this.msg = `服务器连接超时，正在重试(${fetchCount})`
            this.list = await this.getList()
          } else {
            this.msg = '服务器连接失败, 请稍后再访问'
            this.hideLoading()
          }
        })
    },
    async handleVisibilityChange () {
      if (!document.hidden) {
        const listRes = await this.getList()
        if (!listRes || !listRes.length) return
        this.listNew = listRes
        const isDiff = this.list[0].id !== this.listNew[0].id
        if (isDiff) {
          this.handleDiff()
        }
      }
    },
    handleMsgClick () {
    },
    handleDiff () {
      this.msg = '有新内容，点击或下拉刷新'
      this.handleMsgClick = () => {
        this.list = this.listNew
        this.msg = ''
        this.$nextTick(() => window.scrollTo(0, 0))
      }
    }
  },
  computed: {
    skeletonList () {
      const list = []
      list.length = 25
      return list
    }
  },
  async created () {
    if (this.$route.name !== 'Post') {
      this.list = await this.getList()
    }

    handleBackButton()
    document.addEventListener('visibilitychange', this.handleVisibilityChange, false)
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
.list .item {
  position: relative;
	height: 2.5rem;
	line-height: 2.5rem;
  padding: 0 .8rem;
}
.list .item .link {
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
}
.list .item .link:visited {
  color: #9a9a9a;
}
.list .link .placeholder {
  background: red;
  width: 100%;
}
.list .item:nth-child(2n+1) {
  background-color: #F5F5F5;
}
.home-view {
  position: relative;
}
.home-view .msg {
  text-align: center;
  padding: 5px 10px;
  background: #e6e620;
  z-index: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #d4b418;
  opacity: 0.9;
}
</style>
