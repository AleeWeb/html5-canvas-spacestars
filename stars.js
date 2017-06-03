// Setting the Canvas width and height to fill the web browser.

var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var numStars = 300;
var stars = []; //Empty array
var size = 1;
var fl = canvas.width;
var centerX = canvas.width/2;
var centerY = canvas.height/2;
for(var i=0; i<numStars; i++) {
  stars[i] = new Star();
}

function Star() {
  this.x = Math.random()*canvas.width;    //x axis location
  this.y = Math.random()*canvas.height;    //y axis
  this.z = Math.random()*canvas.width;    //depth of star

this.move = function(){
  this.z = this.z-1;
  if(this.z<=0) {
    this.z = canvas.width;
  }
}

  this.show = function() {
    var x, y, s; //x-axis, y-axis, size
    x = (this.x - centerX) * (fl/this.z);
    x = x + centerX;

    y = (this.y - centerY ) * (fl/this.z);
    y=y+centerY;

    s = size * (fl/this.z);

    c.beginPath();
    c.fillStyle = 'white';
    c.arc(x,y,s, 0, Math.PI*2);
    c.fill();
  }
}

function draw() {
  c.fillStyle = 'black';
  c.fillRect(0,0, canvas.width, canvas.height);
  for(var i=0; i<numStars; i++) {
    stars[i].show();
    stars[i].move();
  }
}

function update() {
  draw();
  window.requestAnimationFrame(update);
}

update();
