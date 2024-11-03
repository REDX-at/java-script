'use strict';

const flight = 'LH234';
const redx = {
  name: 'redx',
  passport: 1937,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH789';
  passenger.name = 'aimen ' + passenger.name;
};
checkIn(flight, redx);

console.log(flight);
console.log(redx);
