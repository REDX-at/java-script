'use strict';

document.querySelector('#name--0').textContent = 'Aimen';
document.querySelector('#name--1').textContent = 'Redx';

const score_base = 0;
let wich_player = 1;

document.querySelectorAll('.score')[0].textContent = 0;
document.querySelectorAll('.score')[1].textContent = 0;

const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');

// console.log(btn_roll, btn_hold);

function check_dice() {
  const randome_dice = Math.trunc(Math.random() * 6) + 1;
  randome_dice === 1 ? (wich_player = 2) : (wich_player = 1);
  if (wich_player === 1) {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    let addit = Number(document.querySelector('#current--0').textContent);
    document.querySelector('#current--0').textContent = addit + randome_dice;
  } else {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    let addit = Number(document.querySelector('#current--1').textContent);
    document.querySelector('#current--1').textContent = addit + randome_dice;
  }
}

function check_hold() {
  if (wich_player === 1) {
    let curent = Number(document.querySelector('#current--0').textContent);
    let addhold = Number(document.querySelector('#score--0').textContent);
    document.querySelector('#score--0').textContent = addhold + curent;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
    wich_player = 2;
  } else {
    let curent = Number(document.querySelector('#current--1').textContent);
    let addhold = Number(document.querySelector('#score--1').textContent);
    document.querySelector('#score--1').textContent = addhold + curent;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    wich_player = 1;
  }
}

btn_roll.addEventListener('click', check_dice);
btn_hold.addEventListener('click', check_hold);
