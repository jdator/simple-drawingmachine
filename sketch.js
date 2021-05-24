function setup() {
  createCanvas(600, 600);

  strokeWeight(15);
}

function draw() {

  if (mouseIsPressed){
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {

    clear();
  }
}
