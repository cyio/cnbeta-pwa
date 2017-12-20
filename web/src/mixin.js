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
