<template>
<div class="post-view">
  <div v-if="!loading">
    <div class="title" v-html="post.title"></div>
    <section class="content" v-html="post.content"></section>
  </div>
</div>
</template>

<script>
import mixin from '@/mixin.js'
export default {
  name: 'Post',
  mixins: [mixin],
  data () {
    return {
      post: null,
      err: null
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
          vm.hideLoading()
        })
      })
  },
  mounted () {
  }
}
</script>

<style>
.post-view {
  padding: .8rem;
}

.post-view .content {
  padding-top: .8rem;
}

.post-view .title {
  font-size: 1.3rem;
}
</style>
