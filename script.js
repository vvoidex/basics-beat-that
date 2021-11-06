'use strict'

let player1 = '';
let player2 = '';

let dice1 = [];
let dice2 = [];

let firstPlayer = true;
let secondPlayer = false;

// Rolls Dice from 1 - 6
const diceRoll = function () {
  const randomDecimal = Math.random() * 6;
  const randomInteger = Math.floor(randomDecimal);
  const randomNumber = randomInteger + 1;
  return randomNumber;
}

let calculateWinner = function () {
  let myOutputValue;
  let addNumber1 = String(dice1[0]) + Number(dice2[0]);
  let addNumber2 = String(dice2[0]) + Number(dice1[0]);
  let addNumber3 = String(dice1[1]) + Number(dice2[1]);
  let addNumber4 = String(dice2[1]) + Number(dice1[1]);

  addNumber1 = Number(addNumber1);
  addNumber2 = Number(addNumber2);
  addNumber3 = Number(addNumber3);
  addNumber4 = Number(addNumber4);

  if ((addNumber1 > addNumber3) || (addNumber1 > addNumber4) || (addNumber2 > addNumber3) || (addNumber2 > addNumber4)) {
    myOutputValue = '<br>' + 'Player 1 wins!' + '<br>' + 'Please refresh this page to start another match.'
  } else if ((addNumber1 === addNumber3) || (addNumber1 === addNumber4) || (addNumber2 === addNumber3) || (addNumber2 === addNumber4)) {
    myOutputValue = '<br>' + 'Both players tie!' + '<br>' + 'Please refresh this page to start another match.'
  } else if ((addNumber1 < addNumber3) || (addNumber1 < addNumber4) || (addNumber2 < addNumber3) || (addNumber2 < addNumber4)) {
    myOutputValue = '<br>' + 'Player 2 wins!' + '<br>' + 'Please refresh this page to start another match.'
  }
  console.log(addNumber1);
  console.log(addNumber2);
  console.log(addNumber3);
  console.log(addNumber4);
  return myOutputValue;
}
let main = function (input) {
  let myOutputValue = 'error'

  dice1.push(diceRoll());
  dice2.push(diceRoll());

  if (firstPlayer === true) {
    myOutputValue = 'Welcome Player 1.' + '<br>' + `You rolled ${dice1[0]} for Dice 1 and ${dice2[0]} for Dice 2.` + '<br>' + 'Choose either Dice 1 or Dice 2 for your starting number by typing either 1 or 2.';
    if (input === String(1)) {
      let addNumber1 = String(dice1[0]) + Number(dice2[0]);
      myOutputValue = 'Player 1, you chose Dice 1 first.' + '<br>' + `Your number is ${addNumber1}.` + '<br>' + "It is now Player 2's turn.";
      firstPlayer = false;
      secondPlayer = true;
      addNumber1 = Number(addNumber1);
      console.log(addNumber1);
    } else if (input === String(2)) {
      let addNumber2 = String(dice2[0]) + Number(dice1[0]);
      myOutputValue = 'Player 1, you chose Dice 2 first.' + '<br>' + `Your number is ${addNumber2}.` + '<br>' + "It is now Player 2's turn.";
      firstPlayer = false;
      secondPlayer = true;
      addNumber2 = Number(addNumber2);
      console.log(addNumber2);
    }
  } else if (secondPlayer === true) {
    myOutputValue = 'Welcome Player 2.' + '<br>' + `You rolled ${dice1[1]} for Dice 1 and ${dice2[1]} for Dice 2.` + '<br>' + 'Choose the order of the dice.';
    if (input === String(1)) {
      let addNumber3 = String(dice1[1]) + Number(dice2[1]);
      myOutputValue = 'Player 2, you chose Dice 1 first.' + '<br>' + `Your number is ${addNumber3}.`
      addNumber3 = Number(addNumber3);
      console.log(addNumber3);
      myOutputValue = myOutputValue + calculateWinner();
    } else if (input === String(2)) {
      let addNumber4 = String(dice2[1]) + Number(dice1[1]);
      myOutputValue = 'Player 2, you chose Dice 2 first.' + '<br>' + `Your number is ${addNumber4}.`
      addNumber4 = Number(addNumber4);
      console.log(addNumber4);
      myOutputValue = myOutputValue + calculateWinner();
    }
  }
  return myOutputValue;
}