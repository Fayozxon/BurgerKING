// Preloader:

var loader = document.getElementById('loader');

document.addEventListener('DOMContentLoaded', function() {
  loader.classList.add('loaded');
});


// Bootstrap Validation for Forms:

(function () { 
    'use strict' 
   
    // Fetch all the forms we want to apply custom Bootstrap validation styles to 
    var forms = document.querySelectorAll('.needs-validation') 
   
    // Loop over them and prevent submission 
    Array.prototype.slice.call(forms) 
      .forEach(function (form) { 
        form.addEventListener('submit', function (event) { 
          if (!form.checkValidity()) { 
            event.preventDefault() 
            event.stopPropagation() 
          } 
   
          form.classList.add('was-validated') 
        }, false) 
      }) 
})();


// Prices:
var price;
const PRICE_HAMBURGER = '21500';
const PRICE_SANDWICH = '11900';
const PRICE_PIZZA = '50450';

// Elements:
var priceBox = document.getElementById('priceBox');
var priceBtn = document.getElementById('priceBtn');
var food = document.getElementById('fastfood');
var amount = document.getElementById('amount');

// Validation Elements:
var modalSubmitBtn = document.getElementById('modalSubmitBtn');
var nameBox = document.getElementById('name');
var adressBox = document.getElementById('address');
var cityBox = document.getElementById('city');

priceBtn.addEventListener('click', function() {
  if (amount.value && food.value) {
    switch (food.value) {
      case 'hamburger':
        price = amount.value + ' dona gamburger:<br>'+(amount.value * PRICE_HAMBURGER).toLocaleString('en-US')+' so\'m';
        break;
      case 'pizza':
        price = amount.value + ' dona pitsa:<br>'+(amount.value * PRICE_PIZZA).toLocaleString('en-US')+' so\'m';
        break;
      case 'sandwich':
        price = amount.value + ' dona sendvich:<br>'+(amount.value * PRICE_SANDWICH).toLocaleString('en-US')+' so\'m';
        break;
    }
  
    priceBox.innerHTML = price;
  } else {
    priceBox.innerHTML = 'Mahsulot va uning sonini tanlang!'
  }

  if (amount.value && food.value && adressBox.value && nameBox.value && cityBox.value) {
    modalSubmitBtn.removeAttribute('disabled', 'false');
  } else {
    modalSubmitBtn.setAttribute('disabled', 'true');
  }
});