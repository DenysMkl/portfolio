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

console.log(JSON.parse(localStorage.getItem('way')));