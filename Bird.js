class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage ("sprites/smoke.png");
    this.smokepath = []
    this.Visiblity = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();


    if (this.body.velocity.x>10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
        this.smokepath.push(position);


    }

    
        for (var i=0;i<this.smokepath.length;i++){
        push()
        this.Visiblity=this.Visiblity-0.25;
        tint (255,this.Visiblity);
          image(this.smoke,this.smokepath[i][0],this.smokepath[i][1]);
        pop ();

        }
  }
}
