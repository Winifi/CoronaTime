class Timer {

	constructor() {
  	this.x = width / 2;
    this.y = 0;
  }
  
  
  display() {
      rect(this.x, this.y, 5, height);
  	this.y -= 0.1;
  }
}