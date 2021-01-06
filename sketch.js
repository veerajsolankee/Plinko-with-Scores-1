const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

  var particles = [];
  var plinkos = [];
  var divisions = [];
  var divisionHeight = 300;
  var score = 0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height, width, 20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j = j + 50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var l = 15; l <= width-10; l = l + 50) {
    plinkos.push(new Plinko(l,175));
  }
  for (var m = 40; m <=width; m = m + 50) {
    plinkos.push(new Plinko(m,275));
  }

  for (var n = 15; n <= width-10; n = n + 50) {
    plinkos.push(new Plinko(n,375));
  }
 
}


function draw() {
  background("black"); 
  Engine.update(engine);
  text("Score :"+ score, 20, 50);
  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }
  ground.display();

  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();
  }
   if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
    score++
   }
  for (var o = 0; o < particles.length; o++) {
    particles[o].display();
  }
}