const sideToggle = document.getElementById("sideToggle")
const sideOutput = document.getElementById("sideOutput")

let sideBarState = false
sideToggle.addEventListener('click', () => {
  if (sideBarState === false) {
    sideToggle.classList.remove('fa-bars')
    sideToggle.classList.add('fa-close')
    sideOutput.style.transform = 'translateX(0)'
    sideBarState = true
  } else {
    sideToggle.classList.remove('fa-close')
    sideToggle.classList.add('fa-bars')
    sideOutput.style.transform = 'translateX(-100%)'
    sideBarState = false
  }
})

