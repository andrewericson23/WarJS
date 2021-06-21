//create 52 card deck
function createDeck() {

    //define suits and ranks
    let suits = ['diamonds', 'clubs', 'hearts', 'spades'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    let deck = [];

    //fill deck
    for (let suitCounter = 0; suitCounter < 4; suitCounter++){
        for (let rankCounter = 0; rankCounter < 13; rankCounter++){
            //console.log(ranks[rankCounter] + " of " + suits[suitCounter]);
            deck.push(ranks[rankCounter] + " of " + suits[suitCounter]);
        }
    }
    return deck;
}

//shuffle function
function shuffle(deck) {
    for (let i = 0; i < 52; i++){
        //index position - least to greatest
        let tempCard = deck[i];
        //grab random card
        let randomIndex = Math.floor(Math.random() * 52);
        //replace the card at randomIndex with tempCard
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
}

function checkRank(card){

    let cardRank;

    switch(card) {
        case '2':
          cardRank = 0;
          break;
        case '3':
          cardRank = 1;
          break;
        case '4':
          cardRank = 2;
          break;
        case '5':
          cardRank = 3;
          break;
        case '6':
          cardRank = 4;
          break;
        case '7':
          cardRank = 5;
          break;
        case '8':
          cardRank = 6;
          break;
        case '9':
          cardRank = 7;
          break;
        case 'T':
          cardRank = 8;
          break;
        case 'J':
          cardRank = 9;
          break;
        case 'Q':
          cardRank = 10;
          break;
        case 'K':
          cardRank = 11;
          break;
        case 'A':
          cardRank = 12;
          break;
      }

    return cardRank;
}

function battle(p1, p2) {

    p1Card = p1.shift();
    p2Card = p2.shift();

    let x = "assets/" + findCardImg(p1Card);
    let y = "assets/" + findCardImg(p2Card);

    let disp1 = document.getElementById('cardDisplay1');
    let disp2 = document.getElementById('cardDisplay2');

    disp1.src = x;
    disp2.src = y;

    console.log("player 1 card: " + p1Card);
    console.log("player 2 card: " + p2Card);
    
    p1cRank = p1Card.charAt(0);
    p2cRank = p2Card.charAt(0);

    p1cRank = checkRank(p1cRank);
    p2cRank = checkRank(p2cRank);

    w = document.getElementById('winner');
    z = document.getElementById('score');

    if (p1cRank > p2cRank){
        console.log("player 1 wins");
        p1.push(p1Card);
        p1.push(p2Card);
        let x = p1.length;
        let y = p2.length;
        
        z.textContent = `cpu: ${x}    player: ${y}`;
        w.textContent = "cpu wins round";

        //set cpu win condition
        if(p1.length === 52){
          w.textContent = "cpu has won the game"
        }

    } else if (p2cRank > p1cRank) {
        console.log("player 2 wins");
        p2.push(p1Card);
        p2.push(p2Card);
        let x = p1.length;
        let y = p2.length;
        z.textContent = `cpu: ${x}    player: ${y}`;
        w.textContent = "player wins round";

        //set cpu win condition
        if(p1.length === 52){
          w.textContent = "player has won the game"
        }
    } else {
        console.log("tie");
        //give cards to random winner

        let r = Math.floor(Math.random() * 1);

        if(r === 0){
          p1.push(p1Card);
          p1.push(p2Card);
        } else{
          p2.push(p1Card);
          p2.push(p2Card);
        }

        let x = p1.length;
        let y = p2.length;
        z.textContent = `cpu: ${x}    player: ${y}`;
        w.textContent = "tie - cards given to random side"

  }
}

function findCardImg(cardName) {
  switch(cardName) {
    //diamonds
    case '2 of diamonds':
      imgSrc = '2D.png';
      break;
    case '3 of diamonds':
      imgSrc = '3D.png';
      break;
    case '4 of diamonds':
      imgSrc = '4D.png';
      break;
    case '5 of diamonds':
      imgSrc = '5D.png';
      break;
    case '6 of diamonds':
      imgSrc = '6D.png';
      break;
    case '7 of diamonds':
      imgSrc = '7D.png';
      break;
    case '8 of diamonds':
      imgSrc = '8D.png';
      break;
    case '9 of diamonds':
      imgSrc = '9D.png';
      break;
    case 'T of diamonds':
      imgSrc = 'TD.png';
      break;
    case 'J of diamonds':
      imgSrc = 'JD.png';
      break;
    case 'Q of diamonds':
      imgSrc = 'QD.png';
      break;
    case 'K of diamonds':
      imgSrc = 'KD.png';
      break;
    case 'A of diamonds':
      imgSrc = 'AD.png';
      break;
    //clubs
    case '2 of clubs':
      imgSrc = '2C.png';
      break;
    case '3 of clubs':
      imgSrc = '3C.png';
      break;
    case '4 of clubs':
      imgSrc = '4C.png';
      break;
    case '5 of clubs':
      imgSrc = '5C.png';
      break;
    case '6 of clubs':
      imgSrc = '6C.png';
      break;
    case '7 of clubs':
      imgSrc = '7C.png';
      break;
    case '8 of clubs':
      imgSrc = '8C.png';
      break;
    case '9 of clubs':
      imgSrc = '9C.png';
      break;
    case 'T of clubs':
      imgSrc = 'TC.png';
      break;
    case 'J of clubs':
      imgSrc = 'JC.png';
      break;
    case 'Q of clubs':
      imgSrc = 'QC.png';
      break;
    case 'K of clubs':
      imgSrc = 'KC.png';
      break;
    case 'A of clubs':
      imgSrc = 'AC.png';
      break;
    //hearts
    case '2 of hearts':
      imgSrc = '2H.png';
      break;
    case '3 of hearts':
      imgSrc = '3H.png';
      break;
    case '4 of hearts':
      imgSrc = '4H.png';
      break;
    case '5 of hearts':
      imgSrc = '5H.png';
      break;
    case '6 of hearts':
      imgSrc = '6H.png';
      break;
    case '7 of hearts':
      imgSrc = '7H.png';
      break;
    case '8 of hearts':
      imgSrc = '8H.png';
      break;
    case '9 of hearts':
      imgSrc = '9H.png';
      break;
    case 'T of hearts':
      imgSrc = 'TH.png';
      break;
    case 'J of hearts':
      imgSrc = 'JH.png';
      break;
    case 'Q of hearts':
      imgSrc = 'QH.png';
      break;
    case 'K of hearts':
      imgSrc = 'KH.png';
      break;
    case 'A of hearts':
      imgSrc = 'AH.png';
      break;
    //spades
    case '2 of spades':
      imgSrc = '2S.png';
      break;
    case '3 of spades':
      imgSrc = '3S.png';
      break;
    case '4 of spades':
      imgSrc = '4S.png';
      break;
    case '5 of spades':
      imgSrc = '5S.png';
      break;
    case '6 of spades':
      imgSrc = '6S.png';
      break;
    case '7 of spades':
      imgSrc = '7S.png';
      break;
    case '8 of spades':
      imgSrc = '8S.png';
      break;
    case '9 of spades':
      imgSrc = '9S.png';
      break;
    case 'T of spades':
      imgSrc = 'TS.png';
      break;
    case 'J of spades':
      imgSrc = 'JS.png';
      break;
    case 'Q of spades':
      imgSrc = 'QS.png';
      break;
    case 'K of spades':
      imgSrc = 'KS.png';
      break;
    case 'A of spades':
      imgSrc = 'AS.png';
      break;
  }

return imgSrc;
}

//instantiate deck
deck = createDeck();

//shuffle deck
shuffle(deck);

//create players
let player1 = [];
let player2 = [];

//deal cards to players
for(let i = 0; i < 52; i++){
    
    //even numbers dealt to player 1
    if(i % 2 == 0) {
        //console.log("The number is even.");
        player1.push(deck[i]);
    }

    //odd numbers dealt to player 2
    else {
        //console.log("The number is odd.");
        player2.push(deck[i]);
    }
}

/* function startGame(){
setInterval(function(){ battle(player1, player2); }, 500);
} */

function startGame(){
  battle(player1, player2);
}