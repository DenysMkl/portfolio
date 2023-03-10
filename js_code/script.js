var opener = document.querySelector('.phone_menu')
var perem = document.querySelector('.x_bar')
var sub_menu = document.querySelectorAll('.items')
var menu = document.querySelector('.change_block')
var theme = document.querySelector('.theme')
var header = document.querySelector('.header')
var footer = document.querySelector('.footer')
var avatar = document.querySelector('.profile')
var prof_menu = document.querySelector('.profile_info')
var lang = document.querySelector('.curLang')
var langVar = document.querySelectorAll('.lang')

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
    sub_menu.forEach(elem=>{
        if (!elem.contains(event.target) && elem.classList.contains('active')) {
                elem.classList.remove('active')
        }
    })
})

var prev = 0

document.addEventListener('scroll', function(event){
    
    let pos = event.target.scrollingElement.scrollTop
    if(pos < 60){
        header.classList.remove('fixed_pos')
        header.classList.remove('show')
    }
    else{
        header.classList.add('fixed_pos')
    }
    if (prev > pos) {
        header.classList.add('show')
    }
    else{
        header.classList.remove('show')
        if (window.innerHeight < 440){
            prof_menu.classList.remove('open')
        }
    }
    prev = pos
})

lang.addEventListener('click', ()=>{
    lang.classList.toggle('active')
})

langVar.forEach(l =>{
    l.addEventListener('click', (ev)=> {
        ev.preventDefault()
        curLink = window.location.href.split('?')[0]
        var newLink = curLink + `?lang=${ev.target.textContent}`;
        window.location.href = newLink
    })
})