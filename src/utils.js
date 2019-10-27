function sleep (ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

function isMobile () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
}

function handleBackButton () {
  // exit app when user press back button in pwa standalone mode
  window.document.addEventListener('backbutton', function (ev) {
    window.onpopstate = function (event) {
      if ('app' in window.navigator) {
        window.navigator.app.exitApp()
      }
    }
    ev.preventDefault ? ev.preventDefault() : (ev.returnValue = false)
  })
}

export {
  sleep,
  isMobile,
  handleBackButton
}
