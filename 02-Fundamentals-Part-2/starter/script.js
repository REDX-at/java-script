'use strict';

console.log("Hello in the js fund")
// function logger() {
//         console.log("Im in the funciton");
// }

// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const juice = `Juice is for ${apples} and ${oranges}`;
//     return juice;
// }

// let juice = fruitProcessor(1, 2)

// console.log(juice);
// console.log(fruitProcessor(1, 0));
// console.log(fruitProcessor);

// functon expression
// const a = function (name) {
//     console.log(name);
// }
// a("Aimen");

// Arrow function
// const b = name => name = name + "_test";

// const d = b("Simo");
// console.log(d)

// const retire_age = (yeday, name) => {
//     const age = 2024 - yeday;
//     const retire = 65 - age;
//     console.log(`Hi ${name}, you will retire in ${retire} year`);
// }

// retire_age(2002, "Aimen");

// function call function
// function cut_fruit(fruit) {
//     const fruitpieces = fruit * 4;
//     return fruitpieces
// }

// function fruit_func(apples, oranges) {
//     console.log(`We have ${apples} of apples and ${oranges}`);
//     const applespices = cut_fruit(apples);    
//     const orrangespices = cut_fruit(oranges);
//     console.log(`and now we have ${applespices} pieces of apples and ${orrangespices} pieces of oraneg `);

// }

// fruit_func(5, 3);

// Array in js
// const Names = ["Aimen", "oussama", 9, 9.5];
// // console.log(Names)

// let Arrays = new Array("Hmed", "Hassan");
// console.log(Arrays.length);

// Arrays[1] = "Zabi";
// Arrays[2] = "Zabi";
// Arrays[3] = "Zabi";
// Arrays[4] = "Zabi";
// Arrays[5] = "Zabi";
// Arrays[6] = "Zabi";

// Arrays.unshift("aimen");

// console.log("here is " + Arrays.push("li 7wak"));
// console.log("Here is the poped " + Arrays.pop());
// console.log(Arrays);

// console.log(Arrays.indexOf("aimen"));

/* Write your code below. Good luck! 🙂 */

// function calcTip (bill) {
//     if (bill <= 300 && bill >= 50){
//         const tip = "The tip is 15%";
//         return tip;
//     }
//     else {
//         const tip = "The tip is 20%";
//         return tip;
//     }
    
// }

// calcTip(100);

// // for the array 
// const bills = [125, 555, 44];

// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips);

// const totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]
// console.log(totals)


// const jonas = {
//     firstname: 'Jonas',
//     LastName: 'redx',
//     age: 2037 - 2002,
//     job: 'teacher',
//     friends: ['Lferda', 'bablil', 'zorgan']
// };

// console.log(jonas)
// console.log(jonas.LastName)
// console.log(jonas["friends"])

// // const tell = prompt('What you have yo say');

// // if (jonas[tell])
// //     console.log(jonas[tell])
// // else {
// //     console.log("the property not here ");
// // }
// // console.log(`He say in the prompt ${tell}`);

// const tell_again = prompt('test');

// jonas.mail = 'Jonas@mail.com';
// jonas.phone = "0639473351";

// if (jonas[tell_again])
//     console.log(jonas[tell_again])
// else
//     console.log("error here");

// const person1 = {
//     name: "Aimen",
//     Age: 22,
//     Birthday: 2002,
//     school: "1337",
//     location: "Khouribga",
//     mail: "taoussi.aimen@gmail.com",
//     Phone: "+212639473351",
//     testfunction: function () {
//         this.full_info = person1.name + " have " + this.Age + " years";
//         return this.full_info;
//     }
// }

// person1.newone = "Just new one";

// console.log(person1['newone'])
// console.log(person1['mail'])
// console.log(person1.mail.length)
// console.log(person1.Phone)
// console.log(person1.testfunction(" Taoussi"));
// console.log(person1.full_info)


// const test_one = (aimen, oussama) => {
//     return aimen + oussama;
// }

// console.log(test_one("aimen", " oussama"));

// challenge 3  
// BMI = mass / (height * height)

// const mark = {
//     fullname: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// const jhon = {
//     fullname: "Jhon Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
    
// }

// console.log(mark);
// console.log(jhon);

// console.log("jhon bmi " + jhon.calcBMI());
// console.log("mark bmi " + mark.calcBMI());

// mark.bmi > jhon.bmi ? console.log("Mark bmi is higher than jhon") : console.log("jhon bmi is higher than Mark")

// for loop

// for (let i = 1; i < 4; i += 1) {
//     console.log(i);
// }

const arrays = ["aimen", "3ndo", 22, "ans"]

for (let i = 3; i >= 0; i--) {
    console.log(arrays[i], typeof arrays[i])
}

let i = 0;
