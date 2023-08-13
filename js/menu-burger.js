'use strict'

const burgerMenu = document.querySelector('.burger');
const nav = document.querySelector('.nav');


burgerMenu.addEventListener('click', function() {
    document.body.classList.toggle('lock')
    burgerMenu.classList.toggle('active')
    nav.classList.toggle('active')
})