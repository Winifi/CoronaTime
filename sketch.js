let leftShip;
let rightShip; 
let allDebris = [];
 
const NUM_DEBRIS = 30;

let leftScore; 
let rightScore;

let spaceshipImage;
let coronaImage;

let timer;
function setup() {
  createCanvas(400, 400);

  spaceshipImage = loadImage('spaceship.png');
  coronaImage = loadImage('coronavirus.png');

  leftShip = new Ship(width * 0.33, spaceshipImage);
  rightShip = new Ship(width * 0.66, spaceshipImage);

    // create debris
    for (let i = 0; i < NUM_DEBRIS; i++) {
        allDebris.push(new Debris(coronaImage));
    }

    leftScore = new Score(width * 0.33 - 40);
    rightScore = new Score(width * 0.66 + 40);

    timer = new Timer();
  
}
 
function draw() {
  background(0);
   
  leftShip.update();
  rightShip.update();
   
  leftShip.display();
  rightShip.display();

  updateDebrisAndCheckCollisions();

  leftScore.display(leftShip.score);
  rightScore.display(rightShip.score);

  timer.display();
  
  if (timer.y <= 0-height) {
      noLoop();
      if (leftShip.score > rightShip.score) {
          textSize(32);
      text('Winner: Player 1', height/2,width/2) }
      else if (leftShip.score == rightShip.score){
      textSize(32);
      text("It's a Tie", height/2,width/2) }
      else if (leftShip.score < rightShip.score){
      textSize(32);
      text('Winner: Player 2', height/2+20,width/2) }
  }

  }


 
function updateDebrisAndCheckCollisions() {
    for (let i = 0; i < allDebris.length; i++) {
      allDebris[i].update();
        allDebris[i].display();
      
      if (allDebris[i].hasHitShip(leftShip)) {
          leftShip.respawn();
      } else if (allDebris[i].hasHitShip(rightShip)) {
          rightShip.respawn();
      }
    }
  } 

function keyPressed() {
  if (keyCode == UP_ARROW) {
    rightShip.isUp = true;
    rightShip.isDown = false;
  } else if (keyCode == DOWN_ARROW) {
    rightShip.isDown = true;
    rightShip.isUp = false;
  }
   
   
  if (keyCode == 87) {
    // keycode 'w'
    leftShip.isUp = true;
    leftShip.isDown = false;
  } else if (keyCode == 83) {
    // keycode 's'
    leftShip.isDown = true;
    leftShip.isUp = false;
  }
}
function keyReleased() {
  if (keyCode == UP_ARROW) {
    rightShip.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
    rightShip.isDown = false;
  }
   
  if (keyCode == 87) {
    leftShip.isUp = false;
  } else if (keyCode == 83) {
    leftShip.isDown = false;
  }
}