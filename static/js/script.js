//challenge 1: Your age in Days
function ageInDays(){
  var birthYear = prompt('What is your birth year my friend?');
  var ageInDays = (2024 - birthYear) * 365;
  var h1 = document.createElement('h1');
  h1.setAttribute('id', 'ageInDays');
  var getResult = document.createTextNode('Your are '+ ageInDays + ' days old.');
  h1.appendChild(getResult);
  document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
  document.getElementById('ageInDays').remove();
}

//challenge 2: Cat generator
function generateCat(){
  var image = document.createElement('img');
  image.src = "https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif";
  var div = document.getElementById('flex-cat-gen');
  div.appendChild(image);
}


//challenge 3: Rock, Paper, Scissor
function rpsGame(yourChoice){
  console.log(yourChoice); //gives us that particular elem
  var humanChoice, botChoice;

  humanChoice = yourChoice.id;
  console.log('human Choice: ', humanChoice);

  botChoice = numberToChoice(randomToRpsInt());
  console.log('Computer choice: ', botChoice);

  results = decideWinner(humanChoice, botChoice); //[0, 1]human lost | bot won
  console.log(results);

  message = finalMessage(results); //{message: 'you won!' , 'color': 'green'}
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomToRpsInt(){
  return Math.floor(Math.random() * 3); //generates random no
}
function numberToChoice(number){
  return['rock', 'paper', 'scissor'] [number]; //to the number, if i give it 1 its gonna print paper and vice-versa
}
function decideWinner(yourChoice, computerChoice){
  //kinda like what all of the possibilities are:
  var rpsDatabase = {
    'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
    'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
  }
  var yourScore = rpsDatabase[yourChoice] [computerChoice];
  var computerScore = rpsDatabase[computerChoice] [yourChoice];
  return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]){
  if(yourScore === 0){
    return {'message': 'You lost!', 'color': 'red'};
  }else if(yourScore === 0.5){
    return {'message': 'You tied!', 'color': 'yellow'};
  }else{
    return {'message': 'You won!', 'color': 'green'};
  }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
  var imageDatabase = {
    'rock': document.getElementById('rock').src,
    'scissor': document.getElementById('scissor').src,
    'paper': document.getElementById('paper').src
  }
  //let's remove all the images 
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src ='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML = "<img src ='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
 

//challenge 4: Color Changer
var all_buttons = document.getElementsByTagName('button');
//array to store all the original values/color of the buttons
var copyAllButtons = [];
for(let i = 0; i < all_buttons.length; i++){
  copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
  if(buttonThingy.value === 'red'){
    buttonRed();
  }
  else if(buttonThingy.value === 'green'){
    buttonGreen();
  }
  else if(buttonThingy.value === 'reset'){
    buttonReset();
  }
  else if(buttonThingy.value === 'random'){
    buttonRandom();
  }
}
function buttonRed(){
  for(let i = 0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}
function buttonGreen(){
  for(let i = 0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}
function buttonReset(){
  for(let i = 0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}
function buttonRandom(){
  var colorsChoice = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];
  for(let i = 0; i < all_buttons.length; i++){
    let randomNum = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(colorsChoice[randomNum]);
  }
}


// //challenge 5: Blackjack
// let blackjackGame = {
//   'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': '0'},
//   'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': '0'} ,
//   'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
//   'cardsMap': {'2': 2, '3':3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11]}
// };

// const YOU = blackjackGame['you'];
// const DEALER = blackjackGame['dealer'];

// const hitSound = new Audio('static/sounds/swish.mp3');

// document.querySelector('#blackjack-hit-btn').addEventListener('click', blackjackHit);
// document.querySelector('#blackjack-deal-btn').addEventListener('click', blackjackDeal);

// function blackjackHit(){
//   let card = randomCard();
//   console.log(card);
//   showCard(card, YOU);
//   updateScore(card, YOU);
//   showScore(YOU);
// }

// function randomCard(){
//   let randomIndex = Math.floor(Math.random() * 13);
//   return blackjackGame['cards'][randomIndex];
// }

// function showCard(card, activePlayer){
//   let cardImage = document.createElement('img');
//   cardImage.src = `static/images/${card}.png`;
//   document.querySelector(activePlayer['div']).appendChild(cardImage);
//   hitSound.play();
// }
// function blackjackDeal(){
//   let yourImages = document.querySelector('#your-box').querySelectorAll('img');
//   let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
  
//   for (i = 0; i < yourImages.length; i++){
//     yourImages[i].remove();
//   }

//   for (i = 0; i < dealerImages.length; i++){
//     dealerImages[i].remove();
//   }
// }


// function updateScore(card, activePlayer){
//   if(card === 'A'){
//     if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
//       activePlayer['score'] += blackjackGame['cardsMap'][card][1];
//     }
//     else{
//       activePlayer['score'] += blackjackGame['cardsMap'][card][0];
//     }
    
//   }
//   else{
//     activePlayer['score'] += blackjackGame['cardsMap'][card];
//   }
// }


// function showScore(activePlayer){
//   document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
// }






