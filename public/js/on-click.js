"use strict";
let page = 2
$(document).ready(function() {
  $('#load-cars').on('click', function() {
    page += 1
    fetchJSON()

  })
  // add click listener here
  // it should call on fetchJSON()
});
