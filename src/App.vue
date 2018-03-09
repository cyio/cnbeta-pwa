<template>
<div id="app">
  <header>
    <div v-if="$route.name === 'Home'" class="title link" @click="go({path: '/'})">
        Cnbeta
        <span class="sub">Lite</span>
    </div>
    <div v-else @click="goBack">返回</div>
  </header>
  <div class="main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <transition name="fade"  v-if="!$route.meta.keepAlive">
      <router-view />
    </transition>
  </div>
  <footer><a href="https://github.com/cyio/cnbeta-pwa" target="_blank">cyio/cnbeta-pwa</a></footer>
  <div class="loading" v-if="loading">
    <Spinner line-fg-color="#32669a"></Spinner>
  </div>
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
}

#app {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  // font-size: .9rem;
  padding-top: 3rem;
}

.main {
	// margin-top: .3rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  min-height: 500px;
}

header {
  z-index: 1000;
  background-color: #fff;
  color: var(--theme);
  box-shadow: 0 0 4px #657786;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 3rem;
  position: fixed;
  width: 100%;
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
  #app .main {
		width: 750px;
		border: 1px solid #efefef;
  }
  #app .main,
  #app header .title {
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
  position: fixed;
  top: .5rem;
  right: 1rem;
  z-index: 9999;
}
</style>
