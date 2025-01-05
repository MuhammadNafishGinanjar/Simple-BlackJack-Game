let cards = [];
// let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
// let sum = firstCard + secondCard;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
    name : "Guest",
    chips : 149 
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    
    cards = [firstCard, secondCard]
    
    sum = firstCard + secondCard

    renderGame();
}

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1  // 1 - 12 + 1

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function renderGame(){
    cardsEl.textContent = "Cards:";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " //jika hanya memakai "=" maka yang ditampilkan hanya nilai terakhir dari array
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "Better luck next time"
        isAlive = false
    };
    
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card) //memasukan nilai "card" ke dalam "cards"
        console.log(cards)

        renderGame();
    }

}
