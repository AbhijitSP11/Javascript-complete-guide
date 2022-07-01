'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// XML HTTP REQUEST Function
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  //url to make the request

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  //Any API we use should have COPS set as unknown or Yes

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
              <img class="country__img" src="${data.flags.png}"/>
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages.aym}</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies['PEN'].name
                }</p>
              </div>
            </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('peru');

//Callback hell - when we want the second function to execute only after first has finished execution
