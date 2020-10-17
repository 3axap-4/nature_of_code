/*
Author: Zakharevich Peter
Date: 14.10.2020
*/

class Walker {
  tx = 0.01;
  ty = 10;
  constructor(x, y) {
    this.x = map(noise(this.tx), 0, 1, 0, width/2);
    this.y = map(noise(this.ty), 0, 1, 0, height/2);
  }
  
  move() {
    
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    this.tx += 0.01;
    this.ty += 0.01;
    
  }
  
  render() {
    strokeWeight(2);
    fill(127);
    stroke(0);
    ellipse(this.x, this.y, 24, 24);
  }
}
