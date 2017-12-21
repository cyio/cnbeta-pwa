<template>
<div class="home-view">
  <div class="list">
    <div class="item" v-for="item in list || appShellList">
      <a v-if="loading" class="link"><span class="placeholder"></span></a>
      <a v-else @click="go({name: 'Post', params: { id: item.id }})" :title="item.title" class="link">{{item.title}}</a>
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
      list: null,
      loading: true
    }
  },
  methods: {
    getPostId (url) {
      const re = /view\/(\w*)\.htm/
      return re.exec(url)[1]
    }
  },
  computed: {
    appShellList () {
      const list = []
      list.length = 25
      return list
    }
  },
  created () {
    if (this.$route.name !== 'Post') {
      fetch('/api/cnbeta').then(res => res.json()).then(data => {
        this.loading = false
        this.list = data
      })
    }
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
