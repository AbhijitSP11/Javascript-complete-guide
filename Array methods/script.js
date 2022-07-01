'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  //create a copy using slice method instead of spread

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawn';
    //creating html template
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//create a user name by extracting the first letter from name
//Smith William John = SWJ

//Split, map the array and join

//Create a function that will take the accounts and loop over accounts
//to create a user name

const createUsernames = function (acc) {
  acc.forEach(function (accs) {
    accs.username = accs.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    //we do not need any return type because we are not creating a new value to work
    //we are adding property
  });
};
createUsernames(accounts);
console.log(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(currentAccount.movements);
  //Display balance
  displayBalance(currentAccount);
  //Display Summary
  displaySummary(currentAccount);
};

const displayBalance = function (acc) {
  acc.balance = balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const displaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} EUR`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumInterest.textContent = `${Math.abs(interest)} EUR`;
};

let currentAccount;
let createPin;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and a welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.username !== currentAccount.username
  ) {
    //transfer
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputLoginUsername.value === currentAccount.username &&
    Number(inputLoginPin) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  inputLoginUsername.value = inputLoginPin.value = '';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//--------------Array Methods----------------------

// //slice does not changes the array but creates a new array with extracted elements
// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 5));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));

// ----------------------splice: changes the array and keeps the remaining elements in the array

// console.log(arr.splice(2));
// console.log(arr);

// ----------------------Reverse an array : mutates the original array----------------------

// console.log(arr.reverse());
// console.log(arr);

// ----------------------Concat----------------------

// const letters = arr.concat(movements);
// console.log(letters);
// console.log(...arr, ...movements); //same as above

// ----------------------join
// console.log(letters.join('-'));
// returns with the separator '-';

// console.log('----For-of Loop------');

// ----------------------Accessing the counter variable----------------------

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Transaction ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Transaction ${i + 1}: You withdrawn ${Math.abs(movement)}`);
//   }
// }

// console.log('----ForEach Loop------');

// ----------------------forEach loop takes a callback function----------------------

// //In args, the first argument should always be a current element, second should be index and third should be array
// movements.forEach(function (movement, i) {
//   if (movement > 0) {
//     console.log(`Transaction ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Transaction ${i + 1}: You withdrawn ${Math.abs(movement)}`);
//   }
// });

// In each iteration it will got through the element

// When to use for each and for loop
//We cannot break or use continue in forEach loop

// ----------------------For Each with maps and sets----------------------

// // the first argument should always be a current value, key , complete map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//----------------------Set----------------------
// const currencySet = new Set(['USD', 'EUR', 'GBP']);
// console.log(currencySet);

// currencySet.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//----------------------coding challenge----------------------

//Asked 5 dog owners about their dogs
//first and last two owners have cats

// const checkDOgs = function (dogsJulia, dogsKate) {
//   //create shallow copy of Julia and remove cat ages from copied array

//   const correctDogs = dogsJulia.slice();
//   correctDogs.splice(0, 1);
//   correctDogs.splice(-2);

//   // combine both the arrays
//   const dogs = correctDogs.concat(dogsKate);
//   console.log(dogs);

//   dogsKate.forEach(function (dog, i) {
//     dog >= 3
//       ? console.log(`Dog number ${i + 1} is an adult and is ${dog} years old.`)
//       : console.log(`Dog number ${i + 1} is still a puppy`);
//   });
// };

// checkDOgs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;

// const movementUsd = movements.map(function (mov) {
//   //callback function
//   return mov * euroToUsd;
// });

//The original array is not mutated and the map returned a new array
// console.log(movements);
// console.log(movementUsd);

//we can do the same things in for of loop
//by creating a new array and pushing elements into it

// const movementUsdFor = [];
// for (const mov of movements) {
//   movementUsdFor.push(mov * euroToUsd);
// }
// console.log(movementUsdFor);

//same with arrow function

// const movToUsd = movements.map(mov => mov * euroToUsd)
// console.log(movToUsd);

//maps can also access the index and arrays like the forEach method

// const value = movements.map((mov, i) =>
// `Movement ${i+1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)} `
// );

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//----------------------filter method - for movements of deposits----------------------

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor);

//-------Reduce Method--------------

const balance = movements.reduce((acc, curr, i) => acc + curr, 0);
// console.log(balance);

//The callback function of the reduce method has the first parameter as the accumulator
//accumulator is like a snowball that keeps accumulating the value

// const balance = movements.reduce(function (acc, curr, i) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + curr;
// }, 0);

// console.log(balance);

//external variable needed in for loop

// let balance2 = 0;
// for (const move of movements) balance2 += move;
// console.log(balance2);

//in each loop iteration we return the updated value
//current sum of all the previous values

//call back function is the first argument of the reduce method
//it has a second parameter i.e. the initial value of the accumulator

//-----------------Maximum with reducer----------------
const max = movements.reduce(function (acc, mov1) {
  if (acc > mov1) return acc;
  else return mov1;
}, movements[0]);
console.log(max);

//-----------------THE CHAINING METHOD ----------------

//----------------Flat and FlatMap --------------

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flat(2)- to go two levels deep

//flatMap - only goes one level deep
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
