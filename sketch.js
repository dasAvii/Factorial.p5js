let col1, col2;
let xoff=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
}

function draw() {

  background(0,30);
  translate(width/2, height/2);
  rotate(radians(frameCount*0.5));
  translate(-width/2, -height/2);

  col1 = color(200, 0, 50);
  col2 = color(50, 0, 200);
  let col = lerpColor(col1, col2, map(mouseX, 0, width, 0, 1));

  stroke(col);
  
  let n = 8; //changing number creates different structures
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
    
  }

  fractalTree(width / 2, height/2 , HALF_PI, n);
  fractalTree(width / 2, height/2 , PI, n);
  fractalTree(width / 2, height/2 , -HALF_PI, n);
  fractalTree(width / 2, height/2 , HALF_PI/2, n);
  fractalTree(width / 2, height/2 , -HALF_PI/2, n);
 
  
}

function factorial(n) { 
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function fractalTree(x, y, angle, depth) {
  if (depth === 0) {
    return;
  }
  
  let x1 = x + cos(angle) * depth * 5;
  let y1 = y + sin(angle) * depth * 5;
  
  strokeWeight(depth*0.08);
  line(x, y, x1, y1);
  
  fractalTree(x1, y1, angle - radians(20), depth - 1);
  fractalTree(x1, y1, angle + radians(20), depth - 1);
 


}