function setup() {
  createCanvas(1024,512);
  background(0);
}

function draw() {

for(int i=0; i<width; i+=2) {
  stroke( 255-i/4, 0, 0);
  line(i, 0, 1024-i, height);
}

for(int j=0; j<height; j+=1) {

  stroke(0, 0, 255-j/2);

  line(0, 512-j, width, j);

}

 

noStroke();

fill(255);

ellipse(512, 256, 200, 200);

 

stroke(0);

strokeWeight(10);

arc(512, 256, 180, 180, radians(50), radians(85));

arc(512, 256, 180, 180, radians(5), radians(40));

arc(512, 256, 180, 180, radians(95), radians(175));

arc(512, 256, 180, 180, radians(185), radians(265));

arc(512, 256, 180, 180, radians(275), radians(310));

arc(512, 256, 180, 180, radians(320), radians(355));

 

arc(512, 256, 150, 150, radians(5), radians(40));

arc(512, 256, 150, 150, radians(50), radians(85));

arc(512, 256, 150, 150, radians(95), radians(130));

arc(512, 256, 150, 150, radians(140), radians(175));

arc(512, 256, 150, 150, radians(185), radians(265));

arc(512, 256, 150, 150, radians(275), radians(355));

 

arc(512, 256, 120, 120, radians(7), radians(38));

arc(512, 256, 120, 120, radians(52), radians(83));

arc(512, 256, 120, 120, radians(97), radians(173));

arc(512, 256, 120, 120, radians(187), radians(263));

arc(512, 256, 120, 120, radians(277), radians(308));

arc(512, 256, 120, 120, radians(322), radians(353));

 

noStroke();

fill(255, 0, 0);

ellipse(512, 256, 90, 90);

 

fill(0, 0, 255);

arc(512, 256, 90, 90, radians(0), radians(180));

 

fill(255, 0, 0);
ellipse(512-22.5, 256, 45, 45); 

fill(0, 0, 255);
ellipse(512+22.5, 256, 45, 45);
}