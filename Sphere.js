class Poly {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.polyimg = loadImage("imgs/polygon.png");
    this.body = Bodies.circle(x, y, 20, options, 20);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.polyimg, 0, 0, 45, 45);
    pop();
  }
};
