class Debris {
 
   
  constructor(coronaImage) {
    this.r = 10;
    this.resetDebris();
    this.coronaImage = coronaImage
  }
   
  resetDebris() {
     
    this.y = random(height - 70);
     
    let spawnLeftSide = random(1) < 0.5;
     
    if (spawnLeftSide) {
        this.x = random(-width, 0); 
        this.isGoingLeft = false;
    } else {
        this.x = random(width, width * 2);
      this.isGoingLeft = true;
    }
     
     
  }
   
  update() {
    if (this.isGoingLeft) {
        this.x --;
    } else {
        this.x ++;
    }
     
    if (this.isOffScreen()) {
        this.resetDebris();
    }
  }
   
   
  isOffScreen() {
    if (this.isGoingLeft && this.x < -5) {
        return true;
    } else if(!this.isGoingLeft && this.x > width + 5) {
        return true;
    }
    return false;
  }
   
  display() {
    imageMode(CENTER);
    image(this.coronaImage, this.x, this.y, this.r * 2, this.r * 2);
  }
   
  hasHitPlayer(Player) {
    if (dist(this.x, this.y, Player.x, Player.y) < this.r + Player.r) {
        return true;
    }
    return false
  }
 
}