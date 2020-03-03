<template lang="pug">
#app
  header
    .left
      .title.link(v-if="$route.name === 'Home'", @click="go({path: '/'})")
        | Cnbeta
        span.sub Lite
      .link(v-else='', @click='goHome') 返回
    .right
      .link(v-if="isSupportWebShare && !loading", @click='share') 分享
    .loading(v-if='loading')
      spinner(line-fg-color='#32669a')
  .main
    keep-alive
      router-view(v-if='$route.meta.keepAlive')
    transition(name='fade', v-if='!$route.meta.keepAlive')
      router-view
  footer
    .ink-check
      input(type="checkbox" :checked="useInkDisplay" @change="onChange" value="使用显示优化")
      label 墨水屏显示优化
    a(href='https://github.com/cyio/cnbeta-pwa', target='_blank') cyio/cnbeta-pwa
</template>

<script>
import mixin from '@/mixin.js'
// import { getUrlParameterByName } from './utils.js'
export default {
  mixins: [mixin],
  name: 'app',
  data () {
    return {
      useInkDisplay: false
    }
  },
  methods: {
    share () {
      navigator
        .share({
          title: window.document.title,
          text: '',
          url: window.location.href
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error))
    },
    onChange () {
      this.useInkDisplay = !this.useInkDisplay
    }
  },
  computed: {
    isSupportWebShare () {
      return navigator.share
    }
  },
  watch: {
    'useInkDisplay': function (val) {
      document.documentElement.style.setProperty('--font-weight', val ? 'bold' : 'normal')
      window.localStorage.setItem('useInkDisplay', val)
    }
  },
  created () {
    const useInkDisplay = window.localStorage.getItem('useInkDisplay')
    if (useInkDisplay === 'true') {
      this.useInkDisplay = useInkDisplay
    }
  }
}
</script>

<style lang="stylus">
:root {
  --font-size: 16;
  --font-weight: normal;
}
a {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
	text-decoration-line: none;
}

input,textarea{
	outline:0;
	-webkit-tap-highlight-color:transparent;
	-webkit-user-modify:read-write-plaintext-only
}

ul {
	list-style: none;
	padding: 0;
}

:root {
	--theme: #32669a;
	--headerHeight: 3rem;
}

body {
  margin: 0;
  font-weight var(--font-weight);
}

#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  // font-size: .9rem;
  padding-top: 3rem;
  background: #c5c0c0;
}

.main {
	// margin-top: .3rem;
  border: 1px solid #efefef;
  min-height: calc(100vh - 48px);
  background: #fff;
}

header {
  z-index: 1000;
  background-color: #fff;
  color: var(--theme);
  // box-shadow: 0 0 4px #657786;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  border: 1px solid #d0d0d0;
}

header .title {
  font-size: 2rem;
}

header .title .sub {
  color: #eee;
}

footer {
  text-align: center;
  padding: 15px 0 10px;
  color: #ccc;
	// border-bottom: .1rem solid var(--theme);
}

footer a {
  color: #bbb6b6;
}

img, embed, iframe {
  max-width: 100%;
}

.expand-enter-active, .expand-leave-active {
  transition: all .3s ease;  /*padding: 10px;*/
  overflow: hidden;
}
.expand-enter, .expand-leave-active {
  height: 0;
  padding: 0 5px;
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

@media only screen and (min-width: 900px) {
  #app .main,
  #app header {
    width: 750px;
    margin-left: 150px;
  }
}

.link {
	position: relative;
	cursor: pointer;
  -webkit-user-select: none;
}
.link:before {
	content: '';
	background-color: aliceblue;
	border-radius: 50%;
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
  transform: scale(0.001, 0.001);
}
.link:focus {
	outline: 0;
	color: #fff;
}
.link:focus:before {
  animation: effect_dylan 0.8s ease-out;
}
@keyframes effect_dylan {
	50% {
    transform: scale(1.5, 1.5);
		opacity: 0;
	}
	99% {
    transform: scale(0.001, 0.001);
		opacity: 0;
	}
	100% {
    transform: scale(0.001, 0.001);
		opacity: 1;
	}
}
.loading {
  // margin-top: 50%;
  text-align: center;
  line-height: 2.5rem;
  position: absolute;
  top: .5rem;
  right: 1rem;
  z-index: 9999;
}
.ink-check {
  label {
    color: #000;
    margin-left: 4px;
  }
}
</style>
