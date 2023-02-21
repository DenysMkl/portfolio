var opener = document.querySelector('.phone_menu')
var perem = document.querySelector('.x_bar')
var sub_menu = document.querySelectorAll('.items')
var menu = document.querySelector('.change_block')
var theme = document.querySelector('.theme')
var header = document.querySelector('.header')
var footer = document.querySelector('.footer')
var avatar = document.querySelector('.profile')
var prof_menu = document.querySelector('.profile_info')


avatar.addEventListener('click', function () {
    prof_menu.classList.toggle('open')
    menu.classList.remove('active')
    perem.classList.remove('active')
})

opener.addEventListener('click', function () {
    perem.classList.toggle('active')
    menu.classList.toggle('active')
})

sub_menu.forEach(elem => {
    elem.addEventListener('click', function(){
        elem.classList.toggle('active')
    })
})

theme.addEventListener('click', function () {
    theme.classList.toggle('night')
    theme.classList.toggle('light')
    header.classList.toggle('active')
    footer.classList.toggle('active')
})  

document.addEventListener('click', function (event) {
    if ((!prof_menu.contains(event.target) && prof_menu.classList.contains('open'))&& !avatar.contains(event.target)){
        prof_menu.classList.remove('open')
    }
})


sub_menu.forEach(elem => {
    elem.onmouseover = function () {
        elem.classList.add('hov')
    }
    elem.onmouseout = function () {
        elem.classList.remove('hov')
    }    
})