'use strict';

//Default functions

const bookings = [];

const createBooking = function (flightNum, passenger = 1, price = 2000) {
  // passenger = passenger || 1;
  // price = price || 5000;
  //This is ES5 way

  const booking = {
    flightNum,
    passenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LA121', '80');
console.log(bookings);

//Callback functions

//using higher order function that call another function

const hotel = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const hotelName = function (str, fn) {
  console.log(`Original : ${str}`, `Transformed : ${fn(str)}`);
};

hotelName('JW Marriot', hotel);

//functions returning functions

const book = flightName => pass =>
  console.log(`Flight Name : ${flightName} and passengers : ${pass}`);

book('Lufthansa')(500);

//bind method

// const addTax = (rate, value) => value + value * rate;
// console.log('Total Tax :', addTax(0.1, 200));

// //when we want one rate for all the taxes

// const addVAT = addTax.bind(null, 0.2);
// console.log('Total Tax:', addVAT(200));

//Similar example using function calling another function

const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

//The tax is same but the value keeps on changing
const addVAT2 = addTax(0.2);
console.log(addVAT2(200));
console.log(addVAT2(500));

//using arrow function

// const addTax = rate => value =>
//   console.log('Total tax value :', value + rate * value);
// addTax(0.2)(400);

const addTax2 = rate => value =>
  console.log('Total tax value :', value + rate * value);

const taxVAt3 = addTax2(0.2);
console.log(taxVAt3(300));

//Coding challenge 1 for this module

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: C++', '2: Python', '3: Rust'],
//   //This generates [0,0,0,0]
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const promptDisplay = prompt(
//       'What is your favourite programming language \n0: JavaScript\n1: C++\n2: Python \n3: Rust \nWrite option below'
//     );
//     if (promptDisplay <= 3){

//     }
//   },
//   displayResults(type){
//     if (type === 'string'){
//       console.log('Poll result are', );
//     }
//     else if (type === []){

//     }
//   }
// };

// poll.registerNewAnswer();

// document.querySelector('.answerPoll').addEventListener('click', registerNewAnswer);

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: C++', '2: Python', '3: Rust'],
  //This generates [0,0,0,0]

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question} \n ${this.options.join('\n')} 
   \n('Write option number')`)
    );

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(this.answers);
  },

  //set Default parameters
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// document
//   .querySelector('.answerPoll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.registerNewAnswer();
poll.displayResults.call({ answers: [5, 3, 2] }, 'string');
