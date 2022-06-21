'use strict';
//We select element from document.querySelector, to select a class use . and to select an id use #.

// document.querySelector('.message').textContent = 'Correct Answer 🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '3';

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

//Game Logic

//1. Generate a random number between 0 and 20 at the starting of the game
//2. user will give the input number
//3. On click of the check button, check or compare the value of generated number to the number given by the user.
//4. If the number is correct display correct number
//5. Also check if the input is given or not
//6. Set the correct value at the place of question mark

// let num = Math.trunc(Math.random() * 20) + 1;

// let score = 20;

// let highScore = 0;

// const setMessage = message => {
//   document.querySelector('.message').textContent = message;
// };

// const setNumber = number => {
//   document.querySelector('.number').textContent = number;
// };

// const setScore = score => {
//   document.querySelector('.score').textContent = score;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const val = Number(document.querySelector('.guess').value);

//   if (!num) {
//     setMessage('Insert a number');
//   } else if (val === num) {
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//     document.querySelector('body').style.backgroundColor = '#7dd56f';
//     setMessage('Correct guess 🎉');
//     setNumber(num);
//   } else if (val !== num) {
//     if (score > 1) {
//       setMessage(val > num ? 'guessed high' : 'guessed low');
//       score--;
//       setScore(score);
//     } else {
//       setMessage('You lost the game');
//       score = 0;
//       setScore(score);
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   num = Math.trunc(Math.random() * 20) + 1;
//   setScore(score);
//   setMessage('Start guessing...');
//   document.querySelector('.guess').value = '';
//   setNumber('?');
//   document.querySelector('body').style.backgroundColor = '#222';
// });
