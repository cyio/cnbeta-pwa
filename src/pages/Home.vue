<template>
<div class="home-view">
  <div v-if="msg" class="msg">{{msg}}</div>
  <div class="list">
    <div class="item" v-for="item in list || skeletonList">
      <div @click="go({name: 'Post', params: { id: item.id }})" :title="item.title" class="link"  v-if="list">{{item.title}}</div>
    </div>
  </div>
</div>
</template>

<script>
import mixin from '@/mixin.js'
import axios from 'axios'
// axios.defaults.timeout = 1000 * 5
let fetchCount = 0
const maxFetchTimes = 10
export default {
  name: 'List',
  mixins: [mixin],
  data () {
    return {
      list: null,
      msg: null
    }
  },
  methods: {
    getPostId (url) {
      const re = /view\/(\w*)\.htm/
      return re.exec(url)[1]
    },
    getList (timeoutMs = 5000) {
      fetchCount++
      return axios.get('/api/cnbeta', { timeout: timeoutMs })
        .then(res => {
          this.list = res.data
          this.msg = null
          this.hideLoading()
        })
        .catch(err => {
          console.log('Fetch Error :-S', err)
          if (err.status === 400) {
            console.log('Looks like there was a problem. Status Code: ' + err.status)
            this.msg = `${err.status}: ${err.message}`
            return
          }

          if (fetchCount <= maxFetchTimes) {
            this.msg = `服务器连接超时，正在重试(${fetchCount})`
            this.getList(1000)
          } else {
            this.msg = '服务器连接失败, 请稍后再访问'
            this.hideLoading()
          }
        })
    }
  },
  computed: {
    skeletonList () {
      const list = []
      list.length = 25
      return list
    }
  },
  created () {
    if (this.$route.name !== 'Post') {
      this.getList()
    }

    // exit app when user press back button in pwa standalone mode
    window.document.addEventListener('backbutton', function (ev) {
      window.onpopstate = function (event) {
        if ('app' in window.navigator) {
          window.navigator.app.exitApp()
        }
      }
      ev.preventDefault ? ev.preventDefault() : (ev.returnValue = false)
    })
  },
  mounted () {
  }
}
</script>

<style>
.list .item {
  position: relative;
	height: 2.5rem;
	line-height: 2.5rem;
  padding: 0 .8rem;
}
.list .item .link {
  color: #333;
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
.home-view .msg {
  text-align: center;
  padding: 10px;
  background: aliceblue;
}
</style>
