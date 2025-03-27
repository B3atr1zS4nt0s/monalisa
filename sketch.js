function setup() {
  createCanvas(400, 400);
}

function draw() {
 background('#000000');
  fill('#D776D3');
  circle(200, 240, 300); // rosto
  
  fill('white');
  circle(150, 200, 60); // olho esquerdo
  circle(250, 200, 60); // olho direito
  line(150, 290, 250, 270); // boca
  line(120, 200, 70, 170);
  line(280, 195, 325, 160);
  line(220, 200,180, 200)
  
  fill('#782175');
  line(178,132,110,120); // sobrancelha esquerda
  line(214,130,279,106); // sobrancelha direita
  
  fill('#FB00E8');
  triangle(200, 217, 170, 240, 220, 240); // nariz
  //circle(150, 150, 10); // pupila esquerda
  //circle(250, 150, 10); // pupila direita
  
olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
