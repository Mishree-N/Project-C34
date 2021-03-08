class Fly {

    //give body and position paarmeters
    constructor (BodyX,PointY){

        //options
        var options = {
            bodyA : BodyX,
            pointB : PointY,
            stiffness : 0.05,
            length : 200
        }

        //create constraint fly
        this.fly=Constraint.create(options);

        //add to world
        World.add(myWorld,this.fly);

    }

    display(){

        //varibales for BodyA and PointB
        var pointA, pointB;

        pointA=this.fly.bodyA.position;
        pointB=this.fly.pointB;

        push ();

        //make rope invisible
        strokeWeight(0);

        //create line for display
        line (pointA.x, pointA.y, pointB.x, pointB.y);

        pop ();

    }

    

}

