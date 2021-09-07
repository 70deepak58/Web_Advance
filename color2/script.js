var text = document.querySelector('h1'),
    slider = document.querySelector('input');

slider.addEventListener('input', function () {
  text.style.outlineWidth = this.value + 'px';
  document.querySelector('.width').textContent = this.value + 'px';
}, false);

var select = document.querySelector('#select');

select.addEventListener("change", function (e) {
  text.style.outlineStyle = e.target.value;  
  document.querySelector('.style').textContent = e.target.value;  
});  


var colorPicker = document.querySelector('#color');

colorPicker.addEventListener("input", watchColorPicker, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(e) {  
  text.style.outlineColor = e.target.value; 
  document.querySelector('.color').textContent = e.target.value;
}
