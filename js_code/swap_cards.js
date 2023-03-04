var prod = document.querySelectorAll('.card')

prod.forEach(elem =>{
    elem.onmouseover = function (){
        elem.classList.add('hover')
    }
    elem.onmouseout = function(){
        elem.classList.remove('hover')
    }

    
    elem.addEventListener('click', function(event){
        var spisok_elems = elem.querySelectorAll('.color_item')
        var arr_spisok = Array.from(spisok_elems)
        
        
        if (arr_spisok.includes(event.target)) {
            spisok_elems.forEach(delAll =>{
                delAll.classList.remove('active')
            })   
        }

        spisok_elems.forEach((color)=>{
            classElems = color.className.split(' ').at(-1)
            check_target = event.target.classList.contains(classElems)
            if (check_target){
                elem.querySelector('.prodPhoto').src = `photos/${classElems}.png`
                color.classList.add('active')
            }
        })
    })
})