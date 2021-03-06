"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  let saveArray = []
   carsJSON.forEach((car) => {
    saveArray.push(`<div class="col-md-4 car">
    <h2>${car.Make}</h2>
    <p><strong>Model: ${car.Model}</strong> Tahoe</p>
    <p><strong>Year: ${car.Year}</strong> 2012</p>
    </div>`)
  })
  return saveArray.join(' ')
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {
  let formattedCars = formatCars(carsJSON)
  $('#cars').append(`${formattedCars}`)
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
  page;
  baseUrl = `http://mimeocarlisting.azurewebsites.net/api/cars/${page}/3`
  $.ajax({
    url: baseUrl,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data)
    }
  })
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
}
