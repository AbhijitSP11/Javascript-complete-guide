'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class workout {
  //modern Js not even a part of official Js
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends workout {
  constructor(cords, distance, duration, cadence) {
    super(cords, distance, duration);
    this.cadence = cadence;
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycle1 = new Cycling([39, -12], 27, 95, 200);
// console.log(run1, cycle1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workout = [];

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get current position');
        }
      );
    }
  }

  _loadMap(position) {
    //success callback
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const cords = [latitude, longitude];
    //we should have an inner HTML of map element, div with id as 'map'

    this.#map = L.map('map').setView(cords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //from leaflet library, using as a event listener method

    //handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    //Loop over the array and check if the number is finite or not
    //In end, method will return true if its true for all of the elements

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    //get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if workout running, create running object

    if (type === 'running') {
      const cadence = +inputCadence.value;

      //check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('input has to be positive number');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if workout is cycling create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('input has to be positive number');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    this.#workout.push(workout);
    // Add new object to workout array

    // render workout on map as marker
    this.renderWorkoutMarker(workout);

    //clear  input fields
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        ' ';
    //Display marker
  }
  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent('workout')
      .openPopup();
  }
}

// Render workout list

//Hide form + clear input fields

//execution by instance
const app = new App();
