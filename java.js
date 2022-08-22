const sorteador = [
  '<img src="./images/fiestaparrot.gif" alt="" />',
  '<img src="./images/fiestaparrot.gif" alt="" />',
  '<img src="./images/bobrossparrot.gif" alt="" />',
  '<img src="./images/bobrossparrot.gif" alt="" />',
  '<img src="./images/explodyparrot.gif" alt="" />',
  '<img src="./images/explodyparrot.gif" alt="" />',
  '<img src="./images/metalparrot.gif" alt="" />',
  '<img src="./images/metalparrot.gif" alt="" />',
  '<img src="./images/revertitparrot.gif" alt="" />',
  '<img src="./images/revertitparrot.gif" alt="" />',
  '<img src="./images/tripletsparrot.gif" alt="" />',
  '<img src="./images/tripletsparrot.gif" alt="" />',
  '<img src="./images/unicornparrot.gif" alt="" />',
  '<img src="./images/unicornparrot.gif" alt=""/>'
]

let cardsNum = prompt(
  'Quantas cartas quer jogar? Digite um número par entre 4 e 14'
)
while (cardsNum === NaN || cardsNum % 2 != 0 || cardsNum < 4 || cardsNum > 14) {
  cardsNum = prompt(
    'Quantas cartas quer jogar? Digite um número par entre 4 e 14'
  )
}
sorteador.length = cardsNum
const cardsNone = document.querySelectorAll('.box div')
const cardShowList = []
for (let card of cardsNone) {
  cardShowList.push(card)
}
console.log(cardShowList)
cardShowList.length = cardsNum
console.log(cardShowList)
for (let card of cardShowList) {
  card.classList.add('show')
}

sorteador.sort(comparador)

function comparador() {
  return Math.random() - 0.5
}
console.log(sorteador)

/* ======= REVEAL CARDS =======*/
let xReveal = 0
function reveal(a, b) {
  xReveal++
  if (xReveal < 3) {
    const cardi = a
    cardi.classList.add('javafun')
    cardi.innerHTML = sorteador[b]
  }
  let matchClass = document.querySelectorAll('.box .javafun')
  console.log(matchClass)
  console.log(matchClass[1])

  if (matchClass.length == 2) {
    if (matchClass[0].innerHTML == matchClass[1].innerHTML) {
      matchClass[0].classList.remove('javafun')
      matchClass[1].classList.remove('javafun')
      xReveal = 0
    } else {
      const bilo = setInterval(noSame, 1000)
      function noSame() {
        matchClass[0].classList.remove('javafun')
        matchClass[1].classList.remove('javafun')
        matchClass[0].innerHTML = '<img src="./images/front.png" alt=""/>'
        matchClass[1].innerHTML = '<img src="./images/front.png" alt=""/>'
        clearInterval(bilo)
        xReveal = 0
      }
    }
  }
}

/* ======= MATCH CARDS ==========*/
