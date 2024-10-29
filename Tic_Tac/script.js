"use strict";

// const nameplayer1 = document.querySelector(".in-p1").textContent;
// const nameplayer2 = document.querySelector(".in-p2").textContent;

// console.log("this = " + nameplayer1);
// console.log("this = " + nameplayer2);
console.log("Im here");

const start_btn = document.querySelector(".btn");
start_btn.addEventListener("click", function () {
  const nameplayer1 = document.querySelector(".in-p1").value;
  const nameplayer2 = document.querySelector(".in-p2").value;

  document.querySelector(".para--p1").textContent = nameplayer1;
  document.querySelector(".para--p2").textContent = nameplayer2;
  console.log("that = " + document.querySelector(".para--p1").textContent);
  console.log("that = " + document.querySelector(".para--p2").textContent);
  document.querySelector(".go-run").classList.toggle("run");
  document.querySelector(".body-container").classList.toggle("run");
});

const player1 = document.querySelector(".logo--player-00");
const player2 = document.querySelector(".logo--player-01");
console.log(player1.textContent);

player1.classList.toggle("logo-add");

const blocks = document.querySelectorAll(".blocks");
const xblocks = document.querySelectorAll(".x_o");

console.log(blocks.textContent);

const arrays = [];
for (let i = 0; i < xblocks.length; i++) {
  arrays[i] = xblocks[i];
}

let player_positon = 1;

for (let i = 0; i < arrays.length; i++) {
  blocks[i].addEventListener("click", function () {
    arrays[i].classList.remove("hide_X");
    if (player_positon === 1) {
    }
    player2.classList.toggle("logo-add");
    player1.classList.remove("logo-add");
    if (player_positon === 2) {
      player1.classList.toggle("logo-add");
      player2.classList.remove("logo-add");
    }
    if (player_positon === 1 && arrays[i].textContent !== "O") {
      arrays[i].textContent = "X";
      player_positon = 2;
    } else if (arrays[i].textContent !== "X") {
      arrays[i].textContent = "O";
      player_positon = 1;
    }
    check_winner();
    // console.log(player_positon);
  });
}

function reset() {
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].textContent = "";
  }
  player_positon = 1;
}
function check_winner() {
  if (
    arrays[0].textContent === "X" &&
    arrays[1].textContent === "X" &&
    arrays[2].textContent === "X"
  ) {
    // alert("Player 1 Win");
    let scora = Number(document.querySelector(".table-p1").textContent) + 1;
    document.querySelector(".table-p1").textContent = scora;
    reset();
  }
  if (
    arrays[3].textContent === "X" &&
    arrays[4].textContent === "X" &&
    arrays[5].textContent === "X"
  ) {
    alert("Player 1 Win");
    let scora = Number(document.querySelector(".table-p1").textContent) + 1;
    document.querySelector(".table-p1").textContent = scora;
    reset();
  }
  if (
    arrays[6].textContent === "X" &&
    arrays[7].textContent === "X" &&
    arrays[8].textContent === "X"
  ) {
    alert("Player 1 Win");
    let scora = Number(document.querySelector(".table-p1").textContent) + 1;
    document.querySelector(".table-p1").textContent = scora;
    reset();
  }
  if (
    arrays[0].textContent === "X" &&
    arrays[3].textContent === "X" &&
    arrays[6].textContent === "X"
  ) {
    alert("Player 1 Win");
    let scora = Number(document.querySelector(".table-p1").textContent) + 1;
    document.querySelector(".table-p1").textContent = scora;
    reset();
  }
  if (
    arrays[1].textContent === "X" &&
    arrays[4].textContent === "X" &&
    arrays[7].textContent === "X"
  ) {
    alert("Player 1 Win");
    let scora = Number(document.querySelector(".table-p1").textContent) + 1;
    document.querySelector(".table-p1").textContent = scora;
    reset();
  }
  if (
    arrays[2].textContent === "X" &&
    arrays[5].textContent === "X" &&
    arrays[8].textContent === "X"
  ) {
    alert("Player 1 Win");
    let scora = Number(document.querySelector(".table-p1").textContent) + 1;
    document.querySelector(".table-p1").textContent = scora;
    reset();
  }
  if (
    arrays[0].textContent === "X" &&
    arrays[4].textContent === "X" &&
    arrays[8].textContent === "X"
  ) {
    alert("Player 1 Win");
    let scora = Number(document.querySelector(".table-p1").textContent) + 1;
    document.querySelector(".table-p1").textContent = scora;
    reset();
  }
  if (
    arrays[2].textContent === "X" &&
    arrays[4].textContent === "X" &&
    arrays[6].textContent === "X"
  ) {
    alert("Player 1 Win");
    let scora = Number(document.querySelector(".table-p1").textContent) + 1;
    document.querySelector(".table-p1").textContent = scora;
    reset();
  }
  if (
    arrays[0].textContent === "O" &&
    arrays[1].textContent === "O" &&
    arrays[2].textContent === "O"
  ) {
    alert("Player 2 Win");
    let scora = Number(document.querySelector(".table-p2").textContent) + 1;
    document.querySelector(".table-p2").textContent = scora;
    reset();
  }
  if (
    arrays[3].textContent === "O" &&
    arrays[4].textContent === "O" &&
    arrays[5].textContent === "O"
  ) {
    alert("Player 2 Win");
    let scora = Number(document.querySelector(".table-p2").textContent) + 1;
    document.querySelector(".table-p2").textContent = scora;
    reset();
  }
  if (
    arrays[6].textContent === "O" &&
    arrays[7].textContent === "O" &&
    arrays[8].textContent === "O"
  ) {
    alert("Player 2 Win");
    let scora = Number(document.querySelector(".table-p2").textContent) + 1;
    document.querySelector(".table-p2").textContent = scora;
    reset();
  }
  if (
    arrays[0].textContent === "O" &&
    arrays[3].textContent === "O" &&
    arrays[6].textContent === "O"
  ) {
    alert("Player 2 Win");
    let scora = Number(document.querySelector(".table-p2").textContent) + 1;
    document.querySelector(".table-p2").textContent = scora;
    reset();
  }
  if (
    arrays[1].textContent === "O" &&
    arrays[4].textContent === "O" &&
    arrays[7].textContent === "O"
  ) {
    alert("Player 2 Win");
    let scora = Number(document.querySelector(".table-p2").textContent) + 1;
    document.querySelector(".table-p2").textContent = scora;
    reset();
  }
  if (
    arrays[2].textContent === "O" &&
    arrays[5].textContent === "O" &&
    arrays[8].textContent === "O"
  ) {
    alert("Player 2 Win");
    let scora = Number(document.querySelector(".table-p2").textContent) + 1;
    document.querySelector(".table-p2").textContent = scora;
    reset();
  }
  if (
    arrays[0].textContent === "O" &&
    arrays[4].textContent === "O" &&
    arrays[8].textContent === "O"
  ) {
    alert("Player 2 Win");
    let scora = Number(document.querySelector(".table-p2").textContent) + 1;
    document.querySelector(".table-p2").textContent = scora;
    reset();
  }
  if (
    arrays[2].textContent === "O" &&
    arrays[4].textContent === "O" &&
    arrays[6].textContent === "O"
  ) {
    alert("Player 2 Win");
    let scora = Number(document.querySelector(".table-p2").textContent) + 1;
    document.querySelector(".table-p2").textContent = scora;
    reset();
  }
}
