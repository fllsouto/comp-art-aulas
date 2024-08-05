function setup() {
  s = 0.5
  largura = 297
  altura = 210
  createCanvas(largura*(1 + s), altura*(1 + s));
}

function draw() {
  background("gray");
  strokeWeight(10); // Set the thickness of the point
  x = 150 * (1 + s)
  y = 105 * (1 + s)
  point(x, y);  // Draw a point at coordinates (200, 200)
}
