function setup() {
  s = 0.5
  largura = 297
  altura = 210
  createCanvas(largura*(1 + s), altura*(1 + s));
}

function draw() {
  noLoop();
  background("green")
  fill("blue")
  rect(30, 20, 55, 40);
  fill("red")
  rect(160, 140, 220, 160);
}