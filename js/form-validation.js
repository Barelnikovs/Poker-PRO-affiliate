'use strict'

const formConteiner = document.querySelector('.onboarding-conteiner')
const form = document.querySelector('#form')
const btnSendForm = document.querySelector('#btnSend')
let formInputs = document.querySelectorAll('.form__input')
let idOfFormInputs = {
    formName: 'part1',
    formAge: 'part1',
    formLocation: 'part1',
    formTelegram: 'part1',
    formLimits: 'part2',
    formAboutExperience: 'part2',
    formAboutbackground: 'part3',
    formExpectations: 'part3'
}

document.addEventListener('DOMContentLoaded', function() {
    btnSendForm.addEventListener('click', sendForm)

    async function sendForm() {
        let error = 0
        let formData = new FormData(form)

        checkValidation()
        markErrorInput()

        if (!error) {
            formConteiner.classList.add('sending')
            let responce = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            if (responce.ok) {
                let result = await responce.json()
                alert(result.message)
                form.reset()
                formConteiner.classList.remove('sending')
            } else {
                document.querySelectorAll('.filling').forEach((elem, index) => {
                    if (index === 2) {
                        elem.textContent = 'Ошибка отправки'
                    } else {
                        elem.textContent = ''
                    }
                })
                formConteiner.classList.remove('sending')
            }
        } else {
            moveToErrorPart()
            document.querySelectorAll('.filling').forEach(elem => elem.textContent = 'Заполните все поля')
            error = 0
        }
    }

    // Проверяет форму на валидацию
    function checkValidation() {
        for (let i = 0; i < formInputs.length; i++) {
            const input = formInputs[i]
            if (input.value === '') {
                input.classList.add('error')
                error++
            } else {
                input.classList.remove('error')
            }
        }
    }

    // Отмечает инпуты  взависимости от того есть ли ошибка валидации
    function markErrorInput() {
        formInputs.forEach(input => {
            input.addEventListener('change', function() {
                if (input.value) {
                    input.classList.remove('error')
                } else {
                    input.classList.add('error')
                }
            })
        })
    }
    
    // Делает активной часть формы где находится ошибка
    function moveToErrorPart() {  
        formInputs.forEach(elem => {
            if (elem.classList.contains('error')) {
                for (let key in idOfFormInputs) {
                    if (key === elem.id) {
                        let value = idOfFormInputs[key]
                        if (value === 'part1') {
                            btnReturn.click()
                            btnReturn.click()
                        } else if (value === 'part2') {
                            btnReturn.click()
                        }
                    }
                }
            }
        })
    }
})