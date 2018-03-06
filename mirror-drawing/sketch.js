var radius = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    rect(mouseX, mouseY, radius, radius);
    rect(windowWidth - mouseX, mouseY, radius, radius);
    rect(mouseX, windowHeight - mouseY, radius, radius);
    rect(windowWidth - mouseX, windowHeight - mouseY, radius, radius);
  }
}
