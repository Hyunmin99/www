function setup() {
  createCanvas(800, 800);
  fill(180);
}

function draw() {
  var xPos, yPos, pupX, pupY, pupW, pupH;
  
  xPos=400;
  yPos=400;
  pupX=0;
  pupY=0;
  pupW=6;
  pupH=20;
  
  rectMode(RADIUS);  
  
  //window2Shadow
  noStroke();
  fill(0, 30);
  ellipse(xPos-10, yPos+10, 460, 460);
  
  //window
  fill(85, 60, 20);
  ellipse(xPos, yPos, 400, 400);
  
  //head
  noStroke();
  fill(157, 232, 214);
  ellipse(xPos, yPos-57, 200, 128);
  
  rect(xPos, yPos, 50, 35);
  
  //winkle
  strokeWeight(2);
  stroke(20);
  noFill();
  arc(xPos, yPos, 150, 125, radians(250), radians(290));
  arc(xPos, yPos, 175, 150, radians(240), radians(300));
  arc(xPos, yPos, 190, 175, radians(255), radians(285));
  
  //hair(?)
  fill(20);
  point(xPos+5, yPos-105);
  point(xPos-17, yPos-115);
  point(xPos+20, yPos-115);
  point(xPos-40, yPos-105);
  point(xPos+43, yPos-105);
  point(xPos-57, yPos-106);
  point(xPos+60, yPos-106);
  point(xPos-70, yPos-96);
  
  //mouth
  noFill();
  stroke(157, 232, 214);
  strokeWeight(30);
  arc(xPos, yPos+145, 300, 210, radians(245), radians(295));
  
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(xPos, yPos+145, 300, 210, radians(248), radians(292));
  
  //eyes
  fill(248, 250, 209);
  stroke(0);
  strokeWeight(2);
  ellipse(xPos-28, yPos-10, 54, 80);
  ellipse(xPos+28, yPos-10, 54, 80);
  
  //pupil
  fill(198, 56, 56);
  noStroke();
  rect(xPos-28+pupX, yPos-10-pupY, pupW, pupH);
  rect(xPos+28+pupX, yPos-10-pupY, pupW, pupH);
  
  //neck
  stroke(0);
  strokeWeight(2);
  fill(157, 232, 214);
  rect(xPos, yPos+90, 6, 30);
  
  //cloth
  fill(224, 158, 50);
  stroke(0);
  strokeWeight(2);
  ellipse(xPos, yPos+170, 70, 120);
  
  triangle(xPos, yPos+110, xPos-13, yPos+103, xPos-10, yPos+120);
  triangle(xPos, yPos+110, xPos+12, yPos+103, xPos+10, yPos+120);
  
  //window2
  stroke(57, 134, 255);
  strokeWeight(60);
  noFill();
  ellipse(xPos, yPos+1, 400, 400);
  
  //windowDecorationShadow
  noStroke();
  fill(0, 30);
  ellipse(xPos-5, yPos+205, 15, 15);
  ellipse(xPos-5, yPos-195, 15, 15);
  ellipse(xPos-175, yPos+105, 15, 15);
  ellipse(xPos-175, yPos-95, 15, 15);
  ellipse(xPos+165, yPos+105, 15, 15);
  ellipse(xPos+165, yPos-95, 15, 15);
  
  //windowDecoration
  stroke(0);
  strokeWeight(1);
  fill(95, 195, 255);
  ellipse(xPos, yPos+200, 15, 15);
  ellipse(xPos, yPos-200, 15, 15);
  ellipse(xPos-170, yPos+100, 15, 15);
  ellipse(xPos-170, yPos-100, 15, 15);
  ellipse(xPos+170, yPos+100, 15, 15);
  ellipse(xPos+170, yPos-100, 15, 15);
  
  //nose
  stroke(0);
  strokeWeight(2);
  fill(157, 232, 214);
  triangle(xPos, yPos-2, xPos-22, yPos+60, xPos+22, yPos+60);
  
  noStroke();
  ellipse(xPos, yPos+62, 40, 40);
  
  stroke(0); 
  arc(xPos, yPos+62, 43, 43, 0, PI);
  
  //handsShadow
  noStroke();
  fill(0, 30);
  quad(xPos-25, yPos+173, xPos-50, yPos+164, xPos-48, yPos+185, xPos-27, yPos+185);
  quad(xPos+15, yPos+173, xPos+40, yPos+168, xPos+38, yPos+185, xPos+17, yPos+185);
  ellipse(xPos-37, yPos+185, 20, 20);
  ellipse(xPos+28, yPos+185, 20, 20);
  
  //hands
  fill(157, 232, 214);
  stroke(0);
  strokeWeight(1);
  quad(xPos-20, yPos+168, xPos-45, yPos+164, xPos-43, yPos+180, xPos-22, yPos+180);
  quad(xPos+20, yPos+168, xPos+45, yPos+164, xPos+43, yPos+180, xPos+22, yPos+180);
  
  noStroke();
  ellipse(xPos-32, yPos+180, 20, 20);
  ellipse(xPos+33, yPos+180, 20, 20);
  
  stroke(1);
  noFill();
  arc(xPos-32, yPos+180, 20, 20, 0, PI);
  arc(xPos+33, yPos+180, 20, 20, 0, PI);
}
