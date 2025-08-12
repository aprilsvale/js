const element = document.getElementById('heroInfo');

if (element) { 
  element.addEventListener('mouseover', function() {
    this.style.width = '500px';
    this.style.height = '500px'; 
    this.style.transition = 'all 0.3s'; 
  });
  
  element.addEventListener('mouseout', function() {
    this.style.width = ''; 
    this.style.height = '';
  });
} else {
  console.error('Элемент с ID "heroInfo" не найден');
}




document.getElementById('buttonbutton').addEventListener('click', function() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
});