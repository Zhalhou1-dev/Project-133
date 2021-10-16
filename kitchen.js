img="";
objectstatus="";
objects=[];

function preload(){
    img=loadImage("bedroom.jpg");
}
function setup(){
    createCanvas(500,500);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("Status").innerHTML="Status:Identifying Object";
}
function modelLoaded(){
    console.log("Model Loaded!");
    objectstatus=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.log(error)
    }else{
    console.log(results);
    objects=results;
    }
}
function draw(){
    image(img,0,0,500,500);
}
