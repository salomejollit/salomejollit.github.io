let mesCarreaux;
let n = 50; // n en largeur
let p = 50; // p en hauteur

function setup() {
  frameRate (60)
  noStroke();
  createCanvas(600, 600);
  mesCarreaux = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < p; j++) {
      let dx = int(width / n);
      let dy = int(height / p);
      let xCarreau = (i+1/2)*dx;
      let yCarreau = (j + 1/2)*dy;
      let monCarreau = new Carreau(xCarreau, yCarreau);
      mesCarreaux.push(monCarreau);
    }
  }
  let r = noise(13,6);
  console.log(r);
}


function draw() {
  background(220);
  for (let i = 0; i < mesCarreaux.length; i++) {
    let monCarreau = mesCarreaux[i];
   
    let x = monCarreau.x;
    let y = monCarreau.y;
    let z = frameCount/10;
    
    let prec = 300;
    
    let r = noise(x/prec,y+5656/prec,z)*200;
    let v = noise(x/prec+5845,y/prec,z)*100;
    let b = noise(x/prec,y+8151/prec,z)*200;
     
    
    monCarreau.couleur = color(r,v,b);
    monCarreau.affiche();
  }
}


class Carreau {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
    let r = random (0,255);
    let v = random (0,255);
    let b = random (0,255);
    
    this.couleur = color(r,v,b);
  }

  affiche() {
    rectMode(CENTER);
    fill(this.couleur);
    push();
    let larg = width/n;
    let haut = height/p;
    translate(this.x,this.y);
    rect(0,0,larg,haut);
    pop();
  }
}











