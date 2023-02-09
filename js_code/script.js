function Info() {
    if (document.getElementById("change_block").style.display=="flex") {
        document.getElementById("change_block").style.display="none";

    }
    else{
        document.getElementById("change_block").style.display="flex";
        document.getElementById("change_block").style.backgroundColor="#21244b"
        var height = 0
        var id = setInterval(frame, 10)
        function frame(){
            if (height >= 270){
                clearInterval
            }
            else{
                height += 5
                document.getElementById("change_block").style.height = height+'px'
            }
            document.getElementById("change_block").style.overflow = 'hidden'
        }
        
    }
}