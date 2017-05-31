// Setting the Canvas width and height to fill the web browser.

var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;


var c = canvas.getContext('2d');


function draw() {
  c.fillStyle = 'black';
  c.fillRect(0,0, canvas.width, canvas.height);
}

function update() {
  draw();
  window.requestAnimationFrame(update);
}

update();
