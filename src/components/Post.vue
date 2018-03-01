<template>
<div class="post-view">
  <div class="loading" v-if="loading">
    loading...
  </div>
  <div v-else>
    <div class="title" v-html="post.title"></div>
    <section class="content" v-html="post.content"></section>
  </div>
</div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      post: null,
      err: null,
      loading: true
    }
  },
  methods: {
  },
  beforeRouteEnter (to, from, next) {
    fetch(`/api/cnbeta/${to.params.id}`)
      .then(res => {
        if (res.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + res.status)
          return
        }

        next(async vm => {
          vm.post = await res.json()
          vm.loading = false
          vm.$bar.finish()
        })
      })
  },
  mounted () {
  }
}
</script>

<style>
.post-view {
  padding: .1rem;
}

.post-view .content {
  padding-top: .08rem;
}

.post-view .title {
  font-size: .16rem;
}
</style>
