'use strict'

const formConteiner = document.querySelector('.onboarding-conteiner')
const form = document.querySelector('#form')
const btnSendForm = document.querySelector('#btnSend')

document.addEventListener('DOMContentLoaded', function() {
    btnSendForm.addEventListener('click', sendForm)

    async function sendForm() {
        let formInputs = document.querySelectorAll('.form__input')
        let error = 0
        let formData = new FormData(form)

        for (let i = 0; i < formInputs.length; i++) {
            const input = formInputs[i]
            if (input.value === '') {
                input.classList.add('error')
                error++
            } else {
                input.classList.remove('error')
            }
        }

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
                document.querySelectorAll('.filling').forEach(elem => elem.textContent = 'Ошибка отправки')
                formConteiner.classList.remove('sending')
            }
        } else {
            document.querySelectorAll('.filling').forEach(elem => elem.textContent = 'Заполните все поля')
            error = 0
        }

        formInputs.forEach(input => {
            input.addEventListener('change', function() {
                console.log('change working')
                if (input.value) {
                    console.log('remove error working')
                    input.classList.remove('error')
                } else {
                    input.classList.add('error')
                }
            })
        })
    }     
})