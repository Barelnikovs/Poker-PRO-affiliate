'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const lists = document.querySelectorAll('.nav__li')
    const listsGoTo = document.querySelectorAll('.nav__li[data-goto]')

    // Бургер меню
    function burgerMenuToggle() {
        document.body.classList.toggle('lock')
        burgerMenu.classList.toggle('active')
        nav.classList.toggle('active')
    }

    burgerMenu.addEventListener('click', burgerMenuToggle)

    // Отключение бургер меню при клике на любой пункт
    lists.forEach(elem => {
        elem.addEventListener('click', function() {
            if (burgerMenu.classList.contains('active')) {
                burgerMenuToggle()
            }
        })
    })

    // Скролл по нажатию по пунктам навигации
    if (listsGoTo.length > 0) {
        listsGoTo.forEach((listGoTo) => {
            listGoTo.addEventListener('click', goToBlock)
        })

        function goToBlock(event) {
            const listGoTo = event.target
            if (listGoTo.dataset.goto && document.querySelector(listGoTo.dataset.goto)) {
                const toBlock = document.querySelector(listGoTo.dataset.goto)
                const toBlockValue = toBlock.getBoundingClientRect().top + scrollY

                window.scrollTo({
                    top: toBlockValue,
                    behavior: "smooth"
                })
            }
        }
    }
})
