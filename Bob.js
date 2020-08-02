class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      console.log(this.body);
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, this.radius);
    }
    fly(){
      this.body.position.x = mouseX;
      //this.body.position.y = mouseY
    }
    stop(){
        this.body.position.x = 200;
        this.body.velocityX = 0;
        this.body.velocityY = 0;
    }
};