// const massMark = 38;
// const heightMark = 1.6;

// const massJohn = 40;
// const heightJohn =1.5;

// BmiMark = massMark / (heightMark*2);
// BmiJohn = massJohn / (heightJohn*2);

// if (BmiMark > BmiJohn) {
//     console.log(`Marks's BMI is ${BmiMark} is higher than John's BMI ${BmiJohn} `)
// }
// else{
//     console.log(`John's BMI ${BmiJohn} is higher than Marks BMI ${BmiMark}`)
// }

// dol_avg_score = (96+108+89)/3;
// koala_avg_score = (88+91+110)/3;

// console.log(dol_avg_score, koala_avg_score);

// if (dol_avg_score > koala_avg_score){
//     console.log('Team dolphin is winner 🥇');
// }
// else if (dol_avg_score === koala_avg_score){
//     console.log('The match is a draw');
// }

// Bonus 1
// dol_avg_score = (97+112+101)/3;
// koala_avg_score = (109+95+123)/3;

// console.log(dol_avg_score, koala_avg_score);

// if (dol_avg_score > koala_avg_score && dol_avg_score > 100){
//     console.log('Team dolphin is winner 🥇');
// }
// else if (dol_avg_score === koala_avg_score){
//     console.log('The match is a draw');
// }
// else if (dol_avg_score < koala_avg_score && koala_avg_score > 100){
//     console.log('Team Koala is the winner 🥇');
// }

//Bonus 2

// dol_avg_score = (97+112+101)/3;
// koala_avg_score = (109+95+106)/3;

// console.log(dol_avg_score, koala_avg_score);

// if (dol_avg_score === koala_avg_score && (dol_avg_score >= 100 || koala_avg_score >=100)){
//     console.log('The match is a draw');
// }

//Ternary Operator
// age = 20;
// age >=20 ? console.log('drink wine 🍷') : console.log('drink water 💧');

// Challenge 4

// bill = 275;

// const tip = bill >=50 && bill <= 300 ? 0.15 *bill : 0.20 *bill;
// total = bill + tip;
// console.log(`The bill is ${bill}, tip is ${tip} and the total is ${total}`);

// Function

// function maggie(packet, cheese, people){
//     console.log(packet, cheese, people);
//     const recipe = `To make maggie for ${people}, take ${packet} and ${cheese} slices for a perfect taste.`;
//     return recipe;
// }
// maggie(5, 5,6);
// console.log(maggie(5, 5,6));

//Arrow function

// const yearsToRetirement = birthYear => 2050 - birthYear;
// console.log(yearsToRetirement(1991));

// const yearsToRetirement2 = (birthYear2, name) => {
//     const age = 2030 - birthYear2;
//     retirement = 65 - age;
//     return `${name} will retire after ${retirement} years.`;
// }
// console.log(yearsToRetirement2(1990, 'John'))

//Function calling other function

// const cutPieces = (fruits) => {
//     return fruits * 2;
// }

// const foodProcessor = (apples, oranges) => {

//     const NumberOfApples = cutPieces(apples);
//     const NumberOfOranges = cutPieces(oranges);
//     const juice = `Juice with ${NumberOfApples} apple pieces and ${NumberOfOranges} orange pieces`;
//     return juice;
// }

// console.log(foodProcessor(2,5));
// console.log(cutPieces(5));

// calcAverage = () => {
//     const avgDolphin = (44+23+71)/3;
//     const avgKoala = (65+54+49)/3;
//     return `Avg score of dolphin is ${avgDolphin} and avg score of koala is ${avgKoala}`
// }
// console.log(calcAverage());

// checkWinner = (avgDolphin,avgKoala) => {
//     if (avgDolphin>(avgKoala*2)){
//         console.log(`Dolphin wins (${avgDolphin} vs ${avgKoala})`)
//     }
//     else{
//         console.log(`Koala wins (${avgDolphin} vs ${avgKoala})`)
//     }
// }
// console.log(checkWinner(60,28));

// calcAverage = (a,b,c) => (a + b + c)/3;

// let scoreKoala = calcAverage(65,54,49);
// let scoreDolphin = calcAverage(44,23,71);

// console.log(scoreKoala, scoreDolphin);

// checkWinner = (scoreKoala, scoreDolphin) =>{
//     if(scoreKoala >= 2* scoreDolphin){
//         console.log(`Koala wins (${scoreKoala} vs ${scoreDolphin})`);
//     }
//     else if(scoreDolphin >= 2* scoreKoala){
//         console.log(`Dolphin wins (${scoreKoala} vs ${scoreDolphin})`)
//     }
//     else{
//         console.log('No one wins');
//     }
// }
// checkWinner(230, 600);

// const calcTip = (bill) => bill >=50 && bill <=300 ? 0.15 * bill : 0.2 * bill;

// bills = [125,555,44];

// tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// total = [(bills[0] + tips[0]), (bills[1]+ tips[1]), (bills[2] + tips[2])];;
// console.log(total);

// console.log(`bills: ${bills}, tips : ${tips}, totals : ${total}`);

// const Abhi = {firstName: 'Abhijit',
// lastName: 'Panchal',
// age: 20,
// profession: 'developer'
// }
// console.log(Abhi);
// const detail = prompt('what do you want to know about Abhijit, select from firstName, lastName, age, profession');
// console.log(Abhi[detail]);

// if(Abhi[detail]){
//     console.log(Abhi[detail]);
// }
// else{
//     alert('Wrong request!!')
// }

// const data = {
// firstName: 'Samuel',
// lastName: 'Rexon',
// age: 36,
// job: 'teacher',
// hasDriverLicense: true,

// output: function () {
//     return `${this.firstName} is a ${this.age} year old ${this.job} and he ${this.hasDriverLicense ? 'has a driver license' : 'does not have a drivers license'}`;
// }
// }
// console.log(data.output());

// const Mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     age: '20',
//     mass: 78,
//     height: 1.69,
//     calcBMI : function () {
//         this.BMIvalue = this.mass/(this.height**2);
//         return this.BMIvalue;
//     }

// }

// const John = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: '22',
//     mass: 92,
//     height: 1.95,
//     calcBMI : function () {
//         this.BMIvalue = this.mass/(this.height**2);
//         return this.BMIvalue;
//     }
// }

// console.log(Mark.calcBMI(), John.calcBMI());

// if(Mark.BMIvalue > John.BMI){
//     console.log(`${Mark.firstName} BMI value (${Mark.BMIvalue})
//     is higher than ${John.firstName} (${John.BMIvalue})`)
// }
// else{
//     console.log(`${John.firstName} BMI value ${John.BMIvalue} is higher than ${Mark.firstName} (${Mark.BMIvalue})`)
// }

// console.log('Going for a walk round 1');

// for (let round = 1; round <=10; round++){
//     console.log(`Going for a walk round ${round}`);
// }

// const dataArray = [
//     'Abhijit',
//     18,
//     'Student',
//     'developer',
//     'hasDriverLicense'
// ];

// const newArray = [];

// for( let i=0; i<=dataArray.length; i++){
//     console.log(dataArray[i], typeof dataArray[i]);

//     // newArray[i] = typeof dataArray[i];
//     newArray.push(typeof dataArray[i]);
// }

// console.log(newArray);

// const years = [1991, 1990, 2001, 2002, 2003, 2004, 2005, 2006, 2007]

// age = [];

// for (i=0; i<years.length; i++){
//     const calcAge = 2037 - years[i];
//     console.log(calcAge);
//     age.push(calcAge);
// };

// console.log(age);

//Looping backwards

// const dataArray = [
//     'Abhijit',
//     18,
//     'Student',
//     'developer',
//     'hasDriverLicense'
// ];

// for (i =dataArray.length - 1; i >= 0; i--) {
//     console.log(dataArray[i]);
// }

// Loop inside Loop

// for (exercise = 0; exercise < 5; exercise ++){
//     console.log(`------Exercise ${exercise}`);

//     for (reps = 1; reps < 6; reps ++){
//         console.log(`Exercise ${exercise} : Lifting weight ${reps} times.`);

//         for(water = 1; water < 5; water++){
//             console.log(`Exercise ${exercise} : reps ${reps} : drinking water ${water} times`);
//         }
//     }
// }

// while loop

// let dice = Math.trunc(Math.random() * 6) +1 ;
// while (dice !== 6){
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6){
//         console.log('Loop is about to stop');
// }
// }

"use strict";

// const bills = [22, 295, 176, 440,
//     37, 10, 105, 1100, 86, 52];

// const tips = [];

// const totals = [];

// const calcTip = (bill) => bill >=50 && bill <=300 ? 0.15 * bill : 0.2 * bill;

// for (let i=0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     const total = bills[i] + tips[i];
//     totals.push(total);
// }

// for (let j=0; j < bills.length; j++){
//     console.log(`Your bill amount is ${bills[j]} , tip is ${tips[j]} and total bill is is ${totals[j]}`);
// }

const NumArray = [
  22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48,
];

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(NumArray));
