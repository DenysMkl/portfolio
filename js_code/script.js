var opener = document.querySelector('.x_bar')

var menu = document.querySelector('.change_block')

opener.addEventListener('click', function () {
    opener.classList.toggle('active')
    menu.classList.toggle('active')
})