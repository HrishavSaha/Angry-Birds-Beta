class Slingshot{
    constructor(a,b){
        var options = {
            bodyA:a,
            pointB:b,
            stiffness:0.01,
            lenght:10
        }
        this.pointB = b;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    fly(){
        this.slingshot.bodyA=null;
    }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}