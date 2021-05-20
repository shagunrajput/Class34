class Ball{
    constructor(x, y,radius,color) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius,options);
     this.radius=radius;  
       this.color=color;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill (this.color);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
      ellipseMode(CENTER);
      ellipse(0,0,this.radius*2,this.radius*2);
        
        pop();
      }
}