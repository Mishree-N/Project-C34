//create block class
class Block {

    //give any x,y,width and height
    constructor (x,y){

        //setup width and height
        this.width = 50;
        this.height = 50;

        //give restitution, friction and density option
        var block_options = {
            restitution : 0.8,
            friction : 1,
            density:1
        }

        //create block body
        this.body = Bodies.rectangle (x, y, this.width, this.height, block_options);

        //add block body to world
        World.add (myWorld, this.body );
    }

    //display function to show 
    display () {

        //make pos variable to control positions
        var pos =this.body.position;

        //control angle
        var angle=this.body.angle;

        //push lets you make properties only available to a portion of the code 
        push ();

        //translate lets you change the position of the origin, in this case it makes it the x and y position to the center of any object you make so that the object will rotate on it's center
        translate (pos.x,pos.y);

        //this is required to make rotate work
        angleMode (RADIANS);

        //Rotate the body
        rotate (angle);

        //make rectMode center
        rectMode(CENTER);

        //color , give stroke and make rectangle visible
        fill("red");
        strokeWeight(4);
        stroke("black");
        rect(0, 0, this.width, this.height);
        
        //push & pop are a pair
        pop ();
        
    }
}