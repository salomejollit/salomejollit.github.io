let monBlob; let monBlob2; let monBlob3; let monBlob4; let monBlob5;let monBlob6;let monBlob7; let monBlob8;

function setup() {
  createCanvas(400, 400);
  monBlob = new Blobbe(width/2,height/2,100,"#667b9a");
  monBlob2 = new Blobbe(width/2.5,height/2.5,15,"white");
  monBlob3 = new Blobbe(width/2.5,height/2.5,8,"black");
  monBlob4 = new Blobbe(width/1.7,height/2.5,15,"white");
  monBlob5 = new Blobbe(width/1.7,height/2.5,8,"black");
  monBlob6 = new Blobbe(width/2,height/1.8,35,"pink");
  monBlob7 = new Blobbe(width/4,height/4,45,"#667b9a");
  monBlob8 = new Blobbe(width/1.4,height/4,45,"#667b9a");
  //noLoop();
  noStroke();
}

function draw() {
  background(220);
  monBlob.affiche();
  monBlob6.affiche();
  monBlob7.affiche();
  monBlob8.affiche();
  monBlob2.affiche();
  monBlob3.affiche();
  monBlob4.affiche();
  monBlob5.affiche();
  
}


class Blobbe {
  constructor(x,y,r,couleur){
    this.x = x;
    this.y = y;
    this.r = r;
    this.couleur = couleur;
    this.points = 100;
    this.seed = random(0,1000000);
  }
  
  affiche(){
    push();
    fill(this.couleur);
    translate(this.x,this.y);
    beginShape();
    for(let i = 0;i<this.points;i++){
      let angle = i*2*PI/this.points;
      let rPerlin = 1.5; 
      let xPerlin = rPerlin*cos(angle)+1234;
      let yPerlin = rPerlin*sin(angle)+4567;
      let zPerlin = frameCount*0.01;
      let hasard = map(noise(xPerlin, yPerlin, zPerlin+ this.seed),0,1,0.8,1.2);
      let rAFF = this.r*hasard;
      let x = rAFF*cos(angle);
      let y = rAFF*sin(angle);
      vertex(x,y);
    }
    endShape(CLOSE);
    pop();
  }
}