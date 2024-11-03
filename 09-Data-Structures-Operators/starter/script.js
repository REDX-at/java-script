'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// // };

// // let a = 25;
// // b = a;
// // b= 22;
// // console.log('Hi');

// // const aimen = {
// //   name: 'aimen',
// //   age: 22,
// //   nationality: 'Morocco',
// //   condition: 'Student',
// //   datafunc: function () {
// //     const me = function me() {
// //       console.log(this);
// //     };
// //     me();
// //   },
// // };

// // // aimen.datafunc();
// // const redx = {...aimen};
// // redx.age = 45;
// // console.log(aimen, redx);
// // const {agee} = {...aimen};

// // console.log( age);

// // function dataplayer(playername, age, natio, cond) {
// //   const player = {
// //     name: playername,
// //     age: age,
// //     nationality: natio,
// //     conditions: cond,
// //   };
// //   return player;
// // }

// // const aimen = dataplayer('aimen', 22, 'Moro', 'stu');
// // const redx = dataplayer('red', 22, 'Moro', 'stu');

// // console.log(aimen);
// // console.log(redx);

// // console.log(false || 0);
// // console.log(false ?? undefined);

// // coding challenge 1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// players1.gk = gk;
// players1.fieldPlayers = fieldPlayers;

// const allplayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Couthinho', 'Perisic'];
// const [team1, draw, team2] = [game.odds.team1, game.odds.draw, game.odds.team2];

// function printGoals(...nameplayer) {
//   console.log(nameplayer + ' Scored ' + game.scored.length);
// }

// printGoals(game.scored);

// let temp = team1 < team2;
// const winnerteam = temp
//   ? game.team1 + '1 is mor likely to win'
//   : game.team2 + '1 is mor likely to win';
// console.log(winnerteam);

// // console.log(team1, team2, draw);
// // console.log(players1Final);

// hoisting

// aimen3();

// function aimen3() {
//   console.log('yes');
// }

// const x = 10;
// const y = 20;

// [x, y] = [y, x];

// const arrays = [1, 2, 3, 4, 5];
// console.log(arrays.forEach());
// console.log(arrays);
// const secondearray = [];

// let i = 0;
// for (const item of arrays.entries()) {
//   console.log(item);
// secondearray[i] = item;
// i++;
// }

// console.log(secondearray);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// let i = 1;
// for (const item of game.scored) {
//   console.log('Goal ' + i + ' ' + item);
//   i++;
// }

// const scores = {
//   Gnabry: 1,
//   Hummels: 1,
//   Lewandowski: 1,
// };

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// console.log('Odd of victory ' + game.team1 + ': ' + team1);
// console.log('Odd of victory ' + 'draw: ' + draw);
// console.log('Odd of victory ' + game.team2 + ': ' + team2);

// console.log(scores);

// const mapi = new Map();

// mapi.set('name', 'Aimen').set('Age', 22).set('school', 1337);
// mapi.delete('Age');
// console.log(mapi.get('name'));
// console.log(mapi.get('Age'));
// console.log(mapi.size);

// const test = '      aimen   gfgvg   \n'.trim();

// console.log(test);
// // const testa = test.trim

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const firstsplit = flights.split('+');

// console.log(firstsplit);

const first_one = firstsplit[0];
const seonde_one = firstsplit[1];
const third_one = firstsplit[2];
const last_one = firstsplit[3];
// console.log(first_one);
// console.log(seonde_one);
// console.log(third_one);
// console.log(last_one);

function fixstring(str) {
  console.log(str);
}

fixstring(first_one);
