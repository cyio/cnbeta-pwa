<template>
<div id="app">
  <header>
    <span>Cnbeta</span>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>-- End --</footer>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
:root {
	--theme: #32669a;
}

body {
  margin: 0;
}

#app {
}

main {
}

header {
  margin: 0;
  height: 46px;
  line-height: 46px;
  padding: 0 16px;
  background-color: var(--theme);
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

footer {
  text-align: center;
  padding: 15px 0 10px;
  color: #ccc;
}
</style>
