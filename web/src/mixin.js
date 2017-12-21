export default {
  components: {
  },
  data () {
    return {
    }
  },
  filters: {
  },
  methods: {
    debug (msg) {
      console.log('debug', msg)
    },
    go (path) {
      // console.log(path)
      if (path.name === 'Post') {
        this.$bar.start()
      }
      this.$router.push(path)
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
  },
  beforeDestory () {
  }
}
