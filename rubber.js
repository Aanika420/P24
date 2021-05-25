class Rubber {
    constructor(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1.0
        }
        this.circle = Matter.Bodies.circle(x, y, radius, options);
        World.add(world, this.circle);
    }
    display(){
        push();
        translate(this.circle.position.x, this.circle.position.y);
        imageMode(CENTER);
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(0,0,25,25);
        pop();
    }
}