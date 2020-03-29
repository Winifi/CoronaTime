let leftPlayer;
let rightPlayer; 
let allDebris = [];
 
const NUM_DEBRIS = 30;

let leftScore; 
let rightScore;

let playerImage;
let coronaImage;

let timer;
function setup() {
  createCanvas(400, 400);

  playerImage = loadImage('player.png');
  coronaImage = loadImage('coronavirus.png');

  leftPlayer = new Player(width * 0.33, playerImage);
  rightPlayer = new Player(width * 0.66, playerImage);

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
   
  leftPlayer.update();
  rightPlayer.update();
   
  leftPlayer.display();
  rightPlayer.display();

  updateDebrisAndCheckCollisions();

  leftScore.display(leftPlayer.score);
  rightScore.display(rightPlayer.score);

  timer.display();
  
  if (timer.y <= 0-height) {
      noLoop();
      if (leftPlayer.score > rightPlayer.score) {
          textSize(32);
      text('Winner: Player 1', height/2,width/2) }
      else if (leftPlayer.score == rightPlayer.score){
      textSize(32);
      text("It's a Tie", height/2,width/2) }
      else if (leftPlayer.score < rightPlayer.score){
      textSize(32);
      text('Winner: Player 2', height/2+20,width/2) }
  }

  }


 
function updateDebrisAndCheckCollisions() {
    for (let i = 0; i < allDebris.length; i++) {
      allDebris[i].update();
        allDebris[i].display();
      
      if (allDebris[i].hasHitPlayer(leftPlayer)) {
          leftPlayer.respawn();
      } else if (allDebris[i].hasHitPlayer(rightPlayer)) {
          rightPlayer.respawn();
      }
    }
  } 

function keyPressed() {
  if (keyCode == UP_ARROW) {
    rightPlayer.isUp = true;
    rightPlayer.isDown = false;
  } else if (keyCode == DOWN_ARROW) {
    rightPlayer.isDown = true;
    rightPlayer.isUp = false;
  }
   
   
  if (keyCode == 87) {
    // keycode 'w'
    leftPlayer.isUp = true;
    leftPlayer.isDown = false;
  } else if (keyCode == 83) {
    // keycode 's'
    leftPlayer.isDown = true;
    leftPlayer.isUp = false;
  }
}
function keyReleased() {
  if (keyCode == UP_ARROW) {
    rightPlayer.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
    rightPlayer.isDown = false;
  }
   
  if (keyCode == 87) {
    leftPlayer.isUp = false;
  } else if (keyCode == 83) {
    leftPlayer.isDown = false;
  }
}