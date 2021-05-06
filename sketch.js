var canvas;
var music;
var sur1,sur2,sur3,sur4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    sur1 = createSprite(100,590,180,50);
    sur1.shapeColor = "blue";

    sur2 = createSprite(300,590,180,50);
    sur2.shapeColor = "green";

    sur3 = createSprite(500,590,180,50);
    sur3.shapeColor = "yellow";

    sur4 = createSprite(700,590,180,50);
    sur4.shapeColor = "pink";


    //create box sprite and give velocity
    ball = createSprite(200,200,50,50);
    ball.shapeColor = "white";
    ball.velocityX = 10;
    ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

  //add condition to check if box touching surface and make it box

  if(ball.isTouching(sur1)){
      ball.shapeColor = "blue";
      ball.bounceOff(sur1);
      music.play();
      }

  if(ball.isTouching(sur2)){
    ball.shapeColor = "green";
    ball.bounceOff(sur2);
}

if(ball.isTouching(sur3)){
    ball.shapeColor = "yellow";
    ball.velocityX = 0
    ball.velocityY = 0
    music.stop();
}

if(ball.isTouching(sur4)){
    ball.shapeColor = "pink";
    ball.bounceOff(sur4);
}

    drawSprites();
}
