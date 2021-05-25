class Hammer {
    constructor(x,y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2.0,
          'width': 50,
          'height': 200
      }
      //can't write the name of the object in class
      this.body = Bodies.rectangle(x,y, 50, 200, options);  
      
      World.add(world, this.body);
    }
  
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      push ();
      translate(pos.x,pos.y);
      //rotate (this.body.angle);
      rectMode(CENTER);
      fill("orange");
      //stroke ("white");
      //strokeWeight (5);
      //rect(pos.x, pos.y, this.width, this.height);
      rect(0,0,50,50);
      pop();
    }
}