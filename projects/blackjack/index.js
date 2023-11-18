let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let startBtnEl = document.getElementById("start-bt")
let outBtnEl = document.getElementById("out-bt")
let scoreEl = document.getElementById("score-el")
let cards = []
let score = 0
const cardImages = {
  1: "../images/ace",
  2: "../images/2.png",
  3: "../images/3.png",
  4: "../images/4.png",
  5: "../images/5.png",
  6: "../images/6.png",
  7: "../images/7.png",
  8: "../images/8.png",
  9: "../images/9.png",
  10: "../images/10.png",
  11: "../images/11.png",
  12: "../images/12.png",
  13: "../images/13.png",
}
function drawCard() {
  let card = Math.ceil(Math.random() * (13 - 1) + 1)
  if (card === 1) {
    card = 11
  } else if (card >= 11) {
    card = 10
  }

  let cardImageUrl = cardImages[cardValue]
  let cardImg = document.createElement("img")
  cardImg.src = cardImageUrl
  cardEl.appendChild(cardImg)
  cards.push(cardValue)
  sum += cardValue
  nextCard()
}

function startGame() {
  startBtnEl.textContent = "RESTART GAME"
  message = "Draw the first card!"
  messageEl.textContent = message

  sum = 0
  cards = []
  sumEl.textContent = "Sum: " + sum
  cardEl.textContent = "Cards: " + cards
  scoreEl.textContent = "SCORE: " + score

  showNewCardButton()
}

function restartGame() {
  isAlive = true
  hasBlackJack = false
  sum = 0
  score = 0
  cards = []
  sumEl.textContent = "Sum: " + sum
  cardEl.textContent = "Cards: " + cards
  messageEl.textContent = "Want to play another round?"
  showNewCardButton()
}

function nextCard() {
  if (isAlive && !hasBlackJack) {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + cards
    showOutButton()

    if (sum <= 20) {
      message = "Do you want to draw a new card?"
    } else if (sum === 21) {
      message = "YOU'VE GOT BLACKJACK!!!"
      score++
      hasBlackJack = true
      startBtnEl.textContent = "CONTINUE GAME"

      hideNewCardButton()
      hideOutButton()
    } else {
      message = "You're out!"
      isAlive = false
      startBtnEl.textContent = "RESTART GAME"
      score = 0
      hideNewCardButton()
      hideOutButton()
    }
  } else {
    restartGame()
  }
  messageEl.textContent = message
}

function outTurn() {
  message = "You are safe!"
  messageEl.textContent = message
  startBtnEl.textContent = "CONTINUE GAME"
  hideNewCardButton()
}

function hideNewCardButton() {
  const newCardButton = document.getElementById("newcard-bt")
  newCardButton.style.display = "none"
}

function hideOutButton() {
  const outButton = document.getElementById("out-bt")
  outButton.style.display = "none"
}

function showOutButton() {
  const outButton = document.getElementById("out-bt")
  outButton.style.display = "block"
}

function showNewCardButton() {
  const newCardButton = document.getElementById("newcard-bt")
  newCardButton.style.display = "block"
}
