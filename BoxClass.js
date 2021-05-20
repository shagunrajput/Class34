class Box{
    constructor(x, y,color) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width =50;
        this.height = 50;
       this.color=color;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill (this.color);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
        
        pop();
      }
}