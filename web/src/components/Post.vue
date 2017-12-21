<template>
<div class="post-view">
  <div class="loading" v-if="loading">
    loading...
  </div>
  <div v-else>
    <div class="title" v-html="data.title"></div>
    <section class="content" v-html="data.content"></section>
  </div>
</div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      data: null,
      loading: true
    }
  },
  methods: {
    getData () {
      this.loading = true
      fetch(`/api/cnbeta/${this.$route.params.id}`).then(res => res.json()).then(data => {
        this.data = data
        this.loading = false
      })
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
