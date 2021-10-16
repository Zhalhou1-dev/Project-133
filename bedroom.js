img="";
objectstatus="";
objects=[];

function preload(){
    img=loadImage("bedroom.jpg");
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
function setup(){
    createCanvas(500,500);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("Status").innerHTML="Status:Identifying Object";

}
function draw(){
    image(img,0,0,500,500);

            for (i=0; i<objects.length;i++){
            document.getElementById("Status").innerHTML="Status:Object detected";
    
            fill("#FF0000");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + " "+ percent +"%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect( objects[i].x,objects[i].y, objects[i].width, objects[i].height);
        }
    }


