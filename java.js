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

function reveal(a, b) {
  const cardi = a
  cardi.classList.add('javafun')
  cardi.innerHTML = sorteador[b]
  const bilo = setInterval(remoeu, 5000)
  function remoeu() {
    cardi.innerHTML = '<img src="./images/front.png" alt=""/>'
    cardi.classList.remove('javafun')
    clearInterval(bilo)
  }
  console.log(cardi.classList.length)
}
