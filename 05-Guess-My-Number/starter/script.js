'use strict';

// let message_class = document.querySelector('.message');
// // console.log(document.querySelector('.message'));

// console.log(message_class.textContent);

// message_class.textContent = 'correct Number';

// console.log(message_class.textContent);

// console.log(score.textContent);

// score.textContent = 30;

// console.log(guess.value);
// console.log(guess.value);

let score = 20;
const btn = document.querySelector('.check');
const btn_again = document.querySelector('.again');

let number_winner = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number_winner;

console.log(number_winner);
function type_input() {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent;
  if (guess < number_winner && guess) {
    document.querySelector('.message').textContent = 'try High';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > number_winner && guess) {
    document.querySelector('.message').textContent = 'try Low';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === number_winner && guess) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number_winner;
  }
  //   document.querySelector('.guess').value = '';
  if (document.querySelector('.score').textContent <= 0)
    document.querySelector('.message').textContent = 'Game Over';
}

function reset_all() {
  number_winner = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  let highscore = document.querySelector('.highscore').textContent;
  if (highscore < score)
    document.querySelector('.highscore').textContent = score;
  document.querySelector('.guess').value = '';
  console.log(document.querySelector('.guess').value);
  score = 20;
}

btn.addEventListener('click', type_input);
btn_again.addEventListener('click', reset_all);
