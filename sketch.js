const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;


function preload() {
  getBackgroundImg() 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg)
    Engine.update(engine);
   

    // write code to display time in correct format here
  
if (keyCode===32){
    console.log(bg)
}
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON=await response.json();
    // write code slice the datetime
    var datetime=responseJSON.datetime
   var HOUR=datetime.slice(11,13)


 
    // add conditions to change the background images from sunrise to sunset
   if (HOUR<7 && HOUR>4){
       bg="sunrise1.png"

   }else if (HOUR<9 && HOUR>6){
       bg="sunrise2.png"
   }else if (HOUR<11 && HOUR>8){
       bg="sunrise3.png"
   }else if (HOUR<13 && HOUR>10){
       bg="sunrise4.png"
   }else if(HOUR<15 && HOUR>12){
       bg="sunrise5.png"
   }else if (HOUR<17 && HOUR>14){
       bg="sunrise4.png"
   }else if (HOUR<19 && HOUR>16){
       bg="sunset7.png"
   }else if(HOUR<21 && HOUR>18){
       bg="sunset8.png"
   }else if(HOUR<23 && HOUR>20){
       bg="sunset9.png"
   }else if(HOUR<1 && HOUR>22){
       bg="sunset10.png"
   }else if(HOUR<3 && HOUR>0){
       bg="sunset11.png"
   }else if(HOUR<5 && HOUR>2){
       bg="sunset12.png"
   }

    //load the image in backgroundImg variable here
    console.info("this is it "+HOUR)
backgroundImg=loadImage(bg)
}
