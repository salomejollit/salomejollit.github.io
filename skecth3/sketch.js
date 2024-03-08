let mesBulles;
let n = 450;
let couleurs;

function setup() {
  createCanvas(600, 600);
  couleurs = [color("#667b9a"),color("white"),color("pink")]
  mesBulles = [];
  for(let i = 0;i<n;i++){
    let x = random(0,width);
    let y = random(0,height);
    let maBulle = new Bulle(x,y);
    mesBulles.push(maBulle);
  }
}

function draw() {
  background(220);
  for (let i = 0; i < mesBulles.length; i++){
    let maBulle = mesBulles[i];
    maBulle.affiche();
    maBulle.grouille();
  }
}

class Bulle {
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.r = 15;
  let nC = int(random(0,couleurs.length));
  this.coul = couleurs[nC];
  
  }
  
  affiche(){
    noStroke();
    fill(this.coul);
    ellipse(this.x,this.y,2*this.r,2*this.r);
  }
  
  grouille(){
    let dx = random(-2,2);
    let dy = random(-2,2);
    this.x = this.x + dx;
    this.y = this.y + dy;
    if(dist(this.x,this.y,width/2,height/2)>600){
      this.x = random(0,width);
      this.y = random(0,height);
    }
  
}
  
}

function mouseClicked() {
 maBulle = new Bulle(mouseX, mouseY);
 mesBulles.push(maBulle);
}
  