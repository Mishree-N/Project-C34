//create monster class
class Monster {

    //give any x,y,width and height
    constructor (x,y){

        //setup width and height
        this.width = 250;
        this.height = 250;

        //give restitution option
        var monster_options = {
            restitution : 0.8,
            friction : 1,
            density:1   
        }

        //add image
        this.image=loadImage("images/Monster-01.png");

        //create monster  body
        this.body = Bodies.rectangle (x, y, this.width, this.height, monster_options);

        //add monster body to world
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