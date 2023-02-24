var but = document.querySelectorAll('.arrow')
var counter = 0
var img_list = document.querySelector('.slide_photos')

var img_len = document.querySelectorAll('.image_slide')

let intervalId = setInterval(()=>{
    counter+=1
    img_list.style.left = -100 * (counter%img_len.length) + '%'
}, 5000)

but.forEach(elem =>{
    elem.addEventListener('click', function () {
        clearInterval(intervalId)
        intervalId = setInterval(()=>{
            counter+=1
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
        img_list.style.left = -100 * (counter%img_len.length) + '%'
    })
})
