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

if (document.title != 'Main_Page') {
  ul = document.querySelector('.tree')
  for (let i = 0; i < storedWay.length; i++) {
    var li = document.createElement('li')
    li.classList.add('leaf')
    li.textContent = storedWay[i].replace(/"/g, '')
    ul.appendChild(li)
  } 
}