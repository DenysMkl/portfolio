var but = document.querySelectorAll('.arrow')
var counter = 0
var img_list = document.querySelector('.slide_photos')
var img_len = document.querySelectorAll('.image_slide')
var ul = document.querySelector('.slider_line')

for (i = 0; i < img_len.length; i++){
    var li = document.createElement('li')
    li.classList.add('line')
    ul.appendChild(li)
}

var list = document.querySelectorAll('.line')
removeAll(list)

function removeAll(l) {
    l.forEach(elem =>{
        elem.classList.remove('active')
    })
    list[counter%img_len.length].classList.add('active')
}

let intervalId = setInterval(()=>{
    counter+=1
    removeAll(list)
    
    img_list.style.left = -100 * (counter%img_len.length) + '%'
}, 5000)

but.forEach(elem =>{
    elem.addEventListener('click', function () {
        clearInterval(intervalId)
        intervalId = setInterval(()=>{
            counter+=1
            removeAll(list)
            img_list.style.left = -100 * (counter%img_len.length) + '%'
        }, 5000)

        if (elem.classList.contains('left')){
            counter-=1
            if (counter < 0) {
                counter = img_len.length-1
            }
        }
        if (elem.classList.contains('right')) {
            counter+=1
        }
        removeAll(list)
        img_list.style.left = -100 * (counter%img_len.length) + '%'
    })
})
