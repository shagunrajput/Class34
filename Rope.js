class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.8,
            length: 400
        }
        
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
 

    display(){
    var pointA=this.rope.bodyA.position;
    push()
    stroke("red");
    strokeWeight(5); 
    line (pointA.x,pointA.y,this.pointB.x,this.pointB.y);
    pop ()
    }

}