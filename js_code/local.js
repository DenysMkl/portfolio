
/*
getIm = localStorage.getItem('basePage').split(' ')

finder = getIm.indexOf(document.title)


localStorage.setItem('basePage', finder != -1? getIm.slice(0, finder+1).join(' ') : `${localStorage.getItem('basePage')} ${document.title}`)
console.log(localStorage.getItem('basePage').split(' '))
*/

var param = localStorage.getItem('basePage') +'abc'

localStorage.setItem('basePage', param)
