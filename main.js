function setup(){
 vid = createCapture(VIDEO);
 vid.size(500, 500);
 canvas = createCanvas(450, 375);
 canvas.position(550, 175);
 poseNet = ml5.poseNet(vid, model_loaded);
 poseNet.on("pose", got_poses);
}
var leftWristX = 0;
var rightWristX = 0;
difference = 0;
function draw(){
 background("#cafc03");
 textSize(difference);
 fill("#ff8400");
 text("RMat", 10, 300);
}
function model_loaded(){
 console.log("Pose Net is initialised.");
}
function got_poses(results){
 if(results.length > 0){
  console.log(results);
  leftWristX = results[0].pose.leftWrist.x;
  rightWristX = results[0].pose.rightWrist.x;
  difference = Math.floor(leftWristX - rightWristX);
 }
}