let way = JSON.stringify(document.title);

let storedWay = localStorage.getItem('way');
if (storedWay) {
  try {
    storedWay = JSON.parse(storedWay);
  } catch (error) {
    console.error('Error parsing stored data:', error);
    storedWay = [];
  }
} else {
  storedWay = [];
}

if (storedWay.indexOf(way) == -1) {
    storedWay.push(way);    
}
else{
    storedWay = storedWay.slice(0, storedWay.indexOf(way)+1)
}

localStorage.setItem('way', JSON.stringify(storedWay));

ul = document.querySelector('.tree')
for (let i = 0; i < storedWay.length; i++) {
  var li = document.createElement('li')
  li.classList.add('leaf')
  li.textContent = storedWay[i]
  ul.appendChild(li)
}

console.log(JSON.parse(localStorage.getItem('way')));