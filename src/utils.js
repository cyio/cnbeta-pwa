export function sleep (ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

export function isMobile () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
}
