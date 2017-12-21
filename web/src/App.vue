<template>
<div id="app">
  <header>
    <div class="title" @click="go({path: '/'})"><span>Cnbeta</span></div>
  </header>
  <div class="main">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
  <footer><a href="https://github.com/cyio/cnbeta-pwa" target="_blank">cyio/cnbeta-pwa</a></footer>
</div>
</template>

<script>
import mixin from '@/mixin.js'
export default {
  mixins: [mixin],
  name: 'app'
}
</script>

<style>
a {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
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
}

body {
  margin: 0;
  font-size: .13rem;
}

#app {
  // padding-top: 44px;
}


p {
  line-height: .22rem;
}

.main {
  // padding: .1rem;
	margin-top: .03rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  min-height: 500px;
  box-sizing: 'border-box';
}

header {
  margin: 0;
  height: .44rem;
  line-height: .44rem;
  padding: 0 .05rem;
  background-color: var(--theme);
  color: #ffffff;
  // position: fixed;
  // top: 0;
  // width: 100%;
  // z-index: 1000;
  border-bottom: 1px solid #b2b2b2;
  box-sizing: 'border-box';
}

header .title {
  font-size: .28rem;
	margin-left: .10rem;
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

img, embed {
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

@media only screen and (min-width: 780px) {
  #app {
		width: 750px;
		margin-left: 150px;
		border: 1px solid #efefef;
  }
}
</style>
