'use strict'

// Кнопки
const liToForm = document.querySelector('#liToForm')
const btnToForm = document.querySelector('#btnToForm')

// Онбординг
const overlay = document.querySelector('.onboarding-overlay')
const onboarding = document.querySelector('.onboarding-conteiner')
const parts = document.querySelectorAll('.form__part')
const part1 = document.querySelector('#part1')
const part2 = document.querySelector('#part2')
const part3 = document.querySelector('#part3')
// Онбординг кнопки
const btns = document.querySelectorAll('.onboarding-conteiner__btn')
const btnReturn = document.querySelector('#btnReturn')
const btnNext = document.querySelector('#btnNext')
const btnSend = document.querySelector('#btnSend')
// Онбординг точки
const dots = document.querySelectorAll('.onboarding-conteiner__dot')
const dot1 = document.querySelector('#dot1')
const dot2 = document.querySelector('#dot2')
const dot3 = document.querySelector('#dot3')
const close = document.querySelector('#close')

liToForm.addEventListener('click', onboardingOn)
btnToForm.addEventListener('click', onboardingOn)
btnNext.addEventListener('click', next)
btnReturn.addEventListener('click', Return)

function checkActivePart() {  
    return Array.from(parts).findIndex(elem => elem.classList.contains('form__part--active')) + 1
}

function onboardingOn() {
    overlay.classList.add('onboarding-overlay--active')
    onboarding.classList.add('onboarding-conteiner--active')
    document.body.classList.add('lock')
    if (checkActivePart() === 1) {
        btnNext.classList.add('onboarding-conteiner__btn--active')
        dot1.classList.add('onboarding-conteiner__dot--active')
    } else if (checkActivePart() === 2) {
        btnNext.classList.add('onboarding-conteiner__btn--active')
        btnReturn.classList.add('onboarding-conteiner__btn--active')
        dot2.classList.add('onboarding-conteiner__dot--active')
    } else if (checkActivePart() === 3) {
        btnReturn.classList.add('onboarding-conteiner__btn--active')
        btnSend.classList.add('onboarding-conteiner__btn--active')
        dot3.classList.add('onboarding-conteiner__dot--active')
    }
    overlay.addEventListener('click', onboardingOff)
    close.addEventListener('click', onboardingOff)
}

function onboardingOff() {
    overlay.classList.remove('onboarding-overlay--active')
    onboarding.classList.remove('onboarding-conteiner--active')
    document.body.classList.remove('lock')
    dots.forEach(elem => elem.classList.remove('onboarding-conteiner__dot--active'))
    btns.forEach(elem => elem.classList.remove('onboarding-conteiner__btn--active'))
    overlay.removeEventListener('click', onboardingOff)
    close.removeEventListener('click', onboardingOff)
}

function next() {
    if (checkActivePart() === 1) {
        dot1.classList.remove('onboarding-conteiner__dot--active')
        dot2.classList.add('onboarding-conteiner__dot--active')
        btnReturn.classList.add('onboarding-conteiner__btn--active')
        part1.classList.remove('form__part--active') 
        part2.classList.add('form__part--active')     
    } else if (checkActivePart() === 2) {
        dot2.classList.remove('onboarding-conteiner__dot--active')
        dot3.classList.add('onboarding-conteiner__dot--active')
        btnNext.classList.remove('onboarding-conteiner__btn--active')
        btnSend.classList.add('onboarding-conteiner__btn--active')
        part2.classList.remove('form__part--active') 
        part3.classList.add('form__part--active')
    }
}

function Return() {
    if (checkActivePart() === 3) {
        dot3.classList.remove('onboarding-conteiner__dot--active')
        dot2.classList.add('onboarding-conteiner__dot--active')
        btnNext.classList.add('onboarding-conteiner__btn--active')
        btnSend.classList.remove('onboarding-conteiner__btn--active')
        part3.classList.remove('form__part--active') 
        part2.classList.add('form__part--active')
    } else if (checkActivePart() === 2) {
        dot2.classList.remove('onboarding-conteiner__dot--active')
        dot1.classList.add('onboarding-conteiner__dot--active')
        btnReturn.classList.remove('onboarding-conteiner__btn--active')
        part2.classList.remove('form__part--active') 
        part1.classList.add('form__part--active') 
    }
}



