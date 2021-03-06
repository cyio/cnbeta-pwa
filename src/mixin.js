export default {
  methods: {
    debug (msg) {
      console.log('debug', msg)
    },
    go (path) {
      // console.log(path)
      if (path.name === 'Post') {
        this.showLoading()
      }
      this.$router.push(path)
    },
    goHome () {
      // this.$router.push({ path: '/' })
      history.back() // savedPosition 参数，只有通过浏览器前进、后退时才可用
    },
    showLoading () {
      this.$root.$data.shared.loading = true
    },
    hideLoading () {
      this.$root.$data.shared.loading = false
    }
  },
  computed: {
    loading () {
      return this.$root.$data.shared.loading
    }
  }
}
