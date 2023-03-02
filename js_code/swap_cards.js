var prod = document.querySelectorAll('.card')

prod.forEach(elem =>{
    elem.onmouseover = function (){
        elem.classList.add('hover')
    }
    elem.onmouseout = function(){
        elem.classList.remove('hover')
    }

    
    elem.addEventListener('click', function(event){
        classElems = Array.from(elem.querySelectorAll('.color_item')).map((elem)=>elem.className.split(' ').slice(1))
        
        classElems.forEach((color)=>{
            if (event.target.classList.contains(color)){
                color = color.toString()
                
                elem.querySelector('.prodPhoto').src = `../photos/${color}.png`
            }
        })
    })
})