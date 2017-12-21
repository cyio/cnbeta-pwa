<template>
<div class="home-view">
  <div class="list">
    <div class="item" v-for="item in data||appShellData">
      <a v-if="loading" class="link"><span class="placeholder"></span></a>
      <a v-else @click="go({path: `/post/${item.id}`})" :title="item.title" class="link">{{item.title}}</a>
    </div>
  </div>
</div>
</template>

<script>
import mixin from '@/mixin.js'
export default {
  name: 'List',
  mixins: [mixin],
  data () {
    return {
      data: null,
      loading: true
    }
  },
  methods: {
    getData () {
      this.loading = true
      fetch('/api/cnbeta').then(res => res.json()).then(data => {
        this.data = data
        this.loading = false
      })
    },
    getPostId (url) {
      const re = /view\/(\w*)\.htm/
      return re.exec(url)[1]
    }
  },
  computed: {
    appShellData () {
      const data = []
      data.length = 25
      return data
    }
  },
  created () {
    this.getData()
  },
  mounted () {
  }
}
</script>

<style>
.list .item {
  position: relative;
	height: .35rem;
	line-height: .35rem;
}
.list .item .link {
  color: #333;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  padding: 0 .1rem;
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
</style>
