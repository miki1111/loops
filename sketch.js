


function setup() {
  createCanvas(600, 400);
}

function draw() {

    var x = 0;
    
    background(0);

    stroke(255);
    strokeWeight(4);
    

    while (x <= width) {
      fill(0,200,255);
      ellipse(x, 300, 25, 25);
      x += 50;
    }
    
    for (var x = 0 ; x < width; x += 50){
      fill(255,0,200);
      ellipse(x, 100, 25, 25);
    }
  }