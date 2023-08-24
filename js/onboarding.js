'use strict'

// Кнопки
const liToForm = document.querySelector('#liToForm')
const btnToForm = document.querySelector('#btnToForm')

// Онбординг
const overlay = document.querySelector('.onboarding-overlay')
const onboarding = document.querySelector('.onboarding-conteiner')
const part1 = document.querySelector('#part1')
const part2 = document.querySelector('#part2')
const part3 = document.querySelector('#part3')
// Онбординг кнопки
const btnReturn = document.querySelector('#btnReturn')
const btnNext = document.querySelector('#btnNext')
const btnSend = document.querySelector('#btnSend')
// Онбординг точки
const dot1 = document.querySelector('#dot1')
const dot2 = document.querySelector('#dot2')
const dot3 = document.querySelector('#dot3')
const close = document.querySelector('#close')

liToForm.addEventListener('click', onboardingOn)
btnToForm.addEventListener('click', onboardingOn)
btnNext.addEventListener('click', next)
btnReturn.addEventListener('click', Return)

function onboardingOn() {
    overlay.classList.add('onboarding-overlay--active')
    onboarding.classList.add('onboarding-conteiner--active')
    part1.classList.add('form__part--active')
    btnNext.classList.add('onboarding-conteiner__btn--active')
    dot1.classList.add('onboarding-conteiner__dot--active')
    document.body.classList.add('lock')

    overlay.addEventListener('click', onboardingOff)
    close.addEventListener('click', onboardingOff)
}

function onboardingOff() {
    overlay.classList.remove('onboarding-overlay--active')
    onboarding.classList.remove('onboarding-conteiner--active')
    document.body.classList.remove('lock')

    overlay.removeEventListener('click', onboardingOff)
    close.removeEventListener('click', onboardingOff)

    setTimeout(function() {
        part1.classList.remove('form__part--active')
        part2.classList.remove('form__part--active')
        part3.classList.remove('form__part--active')
        btnReturn.classList.remove('onboarding-conteiner__btn--active')
        btnNext.classList.remove('onboarding-conteiner__btn--active')
        btnSend.classList.remove('onboarding-conteiner__btn--active')
        dot1.classList.remove('onboarding-conteiner__dot--active')
        dot2.classList.remove('onboarding-conteiner__dot--active')
        dot3.classList.remove('onboarding-conteiner__dot--active')
    }, 400)
}

function next() {
    if (part1.classList.contains('form__part--active')) {
        part1.classList.remove('form__part--active')
        part2.classList.add('form__part--active')
        btnReturn.classList.add('onboarding-conteiner__btn--active')
        dot1.classList.remove('onboarding-conteiner__dot--active')
        dot2.classList.add('onboarding-conteiner__dot--active')
    } else if (part2.classList.contains('form__part--active')) {
        part2.classList.remove('form__part--active')
        part3.classList.add('form__part--active')
        dot2.classList.remove('onboarding-conteiner__dot--active')
        dot3.classList.add('onboarding-conteiner__dot--active')
        btnNext.classList.remove('onboarding-conteiner__btn--active')
        btnSend.classList.add('onboarding-conteiner__btn--active')
    }
}

function Return() {
    if (part3.classList.contains('form__part--active')) {
        part3.classList.remove('form__part--active')
        part2.classList.add('form__part--active') 
        dot3.classList.remove('onboarding-conteiner__dot--active')
        dot2.classList.add('onboarding-conteiner__dot--active') 
        btnSend.classList.remove('onboarding-conteiner__btn--active')
        btnNext.classList.add('onboarding-conteiner__btn--active')
    } else if (part2.classList.contains('form__part--active')) {
        part2.classList.remove('form__part--active')
        part1.classList.add('form__part--active')
        btnReturn.classList.remove('onboarding-conteiner__btn--active')
        dot2.classList.remove('onboarding-conteiner__dot--active')
        dot1.classList.add('onboarding-conteiner__dot--active')
    }
}



