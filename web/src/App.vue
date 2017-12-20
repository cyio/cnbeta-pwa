<template>
<div id="app">
  <header>
    <div class="title" @click="go({path: '/'})"><span>Cnbeta</span></div>
  </header>
  <div class="main">
    <router-view></router-view>
  </div>
  <footer>-- End --</footer>
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
	color: #000;
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
}

.main {
  padding: .1rem;
}

header {
  margin: 0;
  height: 44px;
  line-height: 44px;
  padding: 0 .05rem;
  background-color: var(--theme);
  color: #ffffff;
}

header .title {
  font-size: 28px;
	margin-left: 10px;
}

footer {
  text-align: center;
  padding: 15px 0 10px;
  color: #ccc;
}

img {
  max-width: 100%;
}
</style>
