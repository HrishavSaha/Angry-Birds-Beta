class Slingshot{
    constructor(a,b){
        var options = {
            bodyA:a,
            bodyB:b,
            stiffness:0.01,
            lenght:10
        }
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}