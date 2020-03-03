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

const inSleepTime = () => {
  const h = new Date().getHours()
  return h >= 0 && h <= 5
}

function getUrlParameterByName (name, url) {
  if (!url) url = window.location.href
  // name = name.replace(/[\[\]]/g, '\\$&')
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`)
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export {
  sleep,
  isMobile,
  handleBackButton,
  inSleepTime,
  getUrlParameterByName
}
