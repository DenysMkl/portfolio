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
/*
logo.addEventListener('click', function () {
    logo.classList.toggle('active')
    if(logo.classList.contains('active')){
        sub_menu[0].textContent = "Главная"
    }
    else{
        sub_menu[0].textContent = "Home"
    }
    
})*/

theme.addEventListener('click', function () {
    theme.classList.toggle('night')
    theme.classList.toggle('light')
    header.classList.toggle('active')
    footer.classList.toggle('active')
})  

/*var mass = [1,2,3,4,5,6,7,8]
let i = 0
setInterval(function(){
    console.log(i)
    i++
}, 5000)*/