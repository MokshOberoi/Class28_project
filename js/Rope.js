class Rope {
    constructor(bodyX,pointY){
        var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 0.004,
            length : 10
        }
      
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA,pointB;
        if (this.rope.bodyA != null ){
            pointA = this.rope.bodyA.position ;
            pointB = this.rope.pointB;
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

    //Function for releasing the bird
    release(){
        this.rope.bodyA = null ;
    }

    attach(body){
        this.rope.bodyA = body; }

}   

    