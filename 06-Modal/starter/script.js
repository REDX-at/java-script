'use strict';

const modal1 = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

function ftopenModal() {
  console.log('Btn clicked');
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].addEventListener('click', ftopenModal));
}

const closeModal = function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnClosedModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
