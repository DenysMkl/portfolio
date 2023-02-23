var but = document.querySelectorAll('.arrow')
var counter = 0
var img_list = document.querySelector('.slide_photos')

var img_len = document.querySelectorAll('.image_slide')



but.forEach(elem =>{
    elem.addEventListener('click', function () {
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