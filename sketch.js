var canvas;
var music;
var surface1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(90, 590, 190, 20);
    surface1.shapeColor = "blue";
    surface1.debug = false;

    surface2 = createSprite(300, 590, 190, 20);
    surface2.shapeColor = "darkorange";
    surface2.debug = false;
    
    surface3 = createSprite(500, 590, 190, 20);
    surface3.shapeColor = "darkred";
    surface3.debug = false;

    surface4 = createSprite(710, 590, 190, 20);
    surface4.shapeColor = "green";
    surface4.debug = false;


    //create box sprite and give velocity
box=createSprite(random(20,750),20, 20, 20);
box.shapeColor = "white";
box.debug = false;
box.velocityY=3;
box.velocityX=3;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
       
         box.bounceOff( createEdgeSprites());


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor="blue";
        music.play();
        }
                                                                                                          
        if(surface2.isTouching(box)){
            box.shapeColor="darkorange";
            box.velocityY=0;
            box.velocityX=0; 
            music.stop();
            }

 if(surface3.isTouching(box)&& box.bounceOff(surface3)){
    box.shapeColor="darkred";
  }

if(surface4.isTouching(box)&& box.bounceOff(surface4)){
box.shapeColor="green";
}

    drawSprites();

}

