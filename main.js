song1="";
song2="";
rightwristx=0;
rightwristy=0;
leftwristx=0;
leftwristy=0;
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("modelisloaded");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);

    }
}
function draw(){
    image(video,0,0,600,500);
    song1_status=song1.isPlaying()
}
function play(){
    song1.play();
}