function toggleMode() {
  const html = document.documentElement
  const switchButton = document.querySelector("#switch button")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")
  switchButton.classList.toggle("position-transition")
}
