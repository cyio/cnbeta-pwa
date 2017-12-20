<template>
<div class="home-view">
  <div class="loading" v-if="loading">
    loading...
  </div>
  <div class="list" v-else>
    <div class="item" v-for="item in data">
      <a @click="go({path: `/post/${item.id}`})" :title="item.title" class="link">{{item.title}}</a>
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
  },
  created () {
    this.getData()
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.list .item {
  position: relative;
}
.list .item .link {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}
.list .item .link:visited {
  color: #9a9a9a;
}
.list .item:nth-child(2n+1) {
  background-color: #F5F5F5;
}
</style>
