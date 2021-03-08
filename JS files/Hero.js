//create hero class
class Hero {

    //give any x,y,width and height
    constructor (x,y){

        //setup width and height
        this.width = 300;
        this.height = 150;

        //give restitution option
        var hero_options = {
            density : 1,
            frictionAir: 1
        }

        //add image
        this.image=loadImage("images/Superhero-01.png");

        //create hero body
        this.body = Bodies.rectangle (x, y, this.width, this.height, hero_options);

        //add hero body to world
        World.add (myWorld, this.body );

    }

    //display function to show 
    display () {

        //make pos variable to control positions
        var pos =this.body.position;

        push ();

        //translate origin
        translate (pos.x,pos.y);

        //make rectMode center
        imageMode(CENTER);
        //show with image
        image(this.image, 0, 0, this.width, this.height);

        pop ();
        
    }
}