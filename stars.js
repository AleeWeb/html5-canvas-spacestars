// Setting the Canvas width and height to fill the web browser.

var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var numStars = 100; //100 of stars
var stars = []; //Empty array
var size = 1;

for(var i=0; i<numStars; i++) {
  stars[i] = new Star();
}

function Star() {
  this.x = Math.random()*canvas.width;    //x axis location
  this.y = Math.random()*canvas.height;    //y axis
  this.z = Math.random()*canvas.width;    //depth of star


  this.show = function() {
    c.beginPath();
    c.fillStyle = 'white';
    c.arc(this.x, this.y, size, 0, Math.PI*2);
    c.fill();
  }
}

function draw() {
  c.fillStyle = 'black';
  c.fillRect(0,0, canvas.width, canvas.height);
  for(var i=0; i<numStars; i++) {
    stars[i].show();
  }
}

function update() {
  draw();
  window.requestAnimationFrame(update);
}

update();
