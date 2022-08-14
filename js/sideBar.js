const sideToggle = document.getElementById("sideToggle")
const sideOutput = document.getElementById("sideOutput")
const overlay = document.getElementById("overlay")
const yearFoot = document.getElementById("yearFoot")

let sideBarState = false

function sideBarFunc() {
  if (sideBarState === false) {
    overlay.classList.remove('hidden')
    sideToggle.classList.remove('fa-bars')
    sideToggle.classList.add('fa-close')
    sideOutput.style.transform = 'translateX(0)'
    sideBarState = true
  } else {
    overlay.classList.add('hidden')
    sideToggle.classList.remove('fa-close')
    sideToggle.classList.add('fa-bars')
    sideOutput.style.transform = 'translateX(-100%)'
    sideBarState = false
  }
}

sideToggle.addEventListener('click', () => sideBarFunc())

overlay.addEventListener('click', () => sideBarFunc())

yearFoot.textContent = new Date().getFullYear()

