let mesEtoiles = [];
let n = 100;

function setup() {
  createCanvas(600, 600);
  couleurs = [color("black"), color("white"), color("grey"), "#667b9a"];

  for (let i = 0; i < n; i++) {
    let x = random(width);
    let y = random(height);
    let monEtoile = new Etoile(x, y);
    mesEtoiles.push(monEtoile);
  }
}

function draw() {
  background(220);
  for (let i = 0; i < mesEtoiles.length; i++) {
    let monEtoile = mesEtoiles[i];
    monEtoile.affiche();
    monEtoile.tourne();
  }
}

class Etoile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.branches = int(random(4, 8));
    this.r1 = random(1, 20);
    this.r2 = random(1, 50);
    let nC = int(random(0, couleurs.length));
    this.coul = couleurs[nC];
    this.angle = 1;
    this.vitesse = random(1, 5);
  }

  affiche() {
    push();
    noStroke();
    fill(this.coul);
    translate(this.x, this.y);
    rotate(this.angle);
    beginShape();
    for (let i = 0; i < this.branches; i++) {
      let angle = ((2 * PI) / this.branches) * i;
      let angle2 = ((2 * PI) / this.branches) * (i + 1 / 2);

      let x1 = this.r2 * cos(angle);
      let y1 = this.r2 * sin(angle);
      let x2 = this.r1 * cos(angle2);
      let y2 = this.r1 * sin(angle2);

      vertex(x1, y1);
      vertex(x2, y2);
    }
    endShape();
    pop();
  }

  tourne() {
    this.angle = this.angle + this.vitesse / 100;
  }
}
