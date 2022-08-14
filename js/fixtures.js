const fixtureTime = document.getElementById('fixtureTime')
const currentMatch = document.getElementById('currentMatch')

setInterval(() => {
  var fixTime = new Date()
  fixtureTime.textContent = String(fixTime).slice(0, -30)
}, 1000);

currentMatch.scrollIntoView(true);