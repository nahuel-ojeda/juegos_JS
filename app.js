document.addEventListener('DOMContentLoaded', () => {
    //Opciones de cartas
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
  
    //Crear el Tablero
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //chequea las concidencias 
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('clikeaste la misma imagen!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Encontraste una coincidencia')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('no :(, intenta de nuevo')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Felicitaciones!!! Encontraste Todas!!!'
      }
    }
  
    //Voltea la carta
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
