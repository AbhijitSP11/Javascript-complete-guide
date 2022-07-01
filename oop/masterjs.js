"use strict";
//Working with constructors
/* The difference between regular function and a constructor is that constructor are  
created with new keyword 
A this keyword is created with function pointing to the empty object */

// const Person = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// const nick = new Person("Nick", "Jonas");
// const scarlet = new Person("Scarlet", "Johanson");
// const ana = new Person("Ana", "De Armas");
// console.log(nick, scarlet, ana);

//Prototypes

const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

//Now we have to pass an object to the constructor function
//for this we have prototypes

const jonas = new Person1("Jonas", 1990);
console.log(jonas);

//to create a method we will use prototype
Person1.prototype.calcAge = function () {
  console.log(2031 - this.birthYear);
};

jonas.calcAge();

//coding challenge 1

// const BMW = new Car("BMW", 120);
// BMW.brake();
// BMW.accelerate();

// const Mercedes = new Car("Mercedes", 95);
// Mercedes.brake();
// Mercedes.accelerate();
// Mercedes.accelerate();

//working with classes - B.T.S they are functions only

class Pet {
  constructor(petName, petAge) {
    this.petName = petName;
    this.petAge = petAge;
  }

  greet() {
    console.log(`Hey ${this.petName}!`);
  }
}

const cat = new Pet("lily", 3);
console.log(cat);

cat.greet();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(`${make} going at ${speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

class Car1 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

const ford = new Car1("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speed = 50;
console.log(ford);

console.log(ford);

//OOP all the concepts

class Student extends Person1 {
  university = "University of London";
  #studyHours = 8;
  #course;
  static numSubjects = 10;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);

    this.startYear = startYear;
    this.course = course;
  }
  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }
  #makeCoffee() {
    return "Here's your Espresso";
  }
  get testScore() {
    return this._testScore;
  }

  set testScore(score) {
    this._testScore = score <= 28 ? score : 8;
  }
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

const student = new Student("Jonas", 2000, 2020, "Computer Science");
console.log(student);
