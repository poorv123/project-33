const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow,snow2,snowimg,snow2img;
var backgroundimg

var engine, world;
var snow = [];
var rand;
                                                                  
function preload(){

    backgroundimg = loadImage("snow2.jpg")
    
}

function setup(){
    createCanvas(1000,650);

    engine = Engine.create();
    world = engine.world;

    }
    


function draw(){
    Engine.update(engine);
    background(backgroundimg); 

    //creating drops
    if(frameCount % 2 === 0){
snow.push(new Snow(random(0,1000),0));
        
        
    }

    //displaying rain snow
    for(var i = 0; i<snow.length; i++){
        snow[i].display();
        
    }

    
}   

