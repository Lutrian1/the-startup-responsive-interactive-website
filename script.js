let navBarProducten = document.querySelector('.producten a'); 
let productenDropdownBlock = document.querySelector('section.productendropdownblock'); 
let kruisKnop = document.querySelector('.kruisknop'); 

navBarProducten.addEventListener('click', function () {
    productenDropdownBlock.hidden = false; 
});

kruisKnop.addEventListener('click', function () {
    productenDropdownBlock.hidden = true; 
});
