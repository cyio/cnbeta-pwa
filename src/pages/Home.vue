<template>
<div class="home-view">
  <div class="list">
    <div class="item" v-for="item in list || skeletonList">
      <div @click="go({name: 'Post', params: { id: item.id }})" :title="item.title" class="link"  v-if="!loading">{{item.title}}</div>
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
      list: null
    }
  },
  methods: {
    getPostId (url) {
      const re = /view\/(\w*)\.htm/
      return re.exec(url)[1]
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
      console.time('fetch list')
      fetch('/api/cnbeta')
        .then(async res => {
          console.timeEnd('fetch list')
          console.time('parse json')
          if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + res.status)
            return
          }

          this.list = await res.json()
          console.timeEnd('parse json')
          this.hideLoading()
        })
        .catch(err => {
          console.log('Fetch Error :-S', err)
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
</style>
