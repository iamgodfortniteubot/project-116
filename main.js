noseX = 0;
noseY = 0;

function preload(){
mustage = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modeloaded);
poseNet.on('pose', got_poses);
}

function modeloaded(){
console.log("posNet is intealised");
}

function got_poses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x-15;
noseY = results[0].pose.nose.y-15;
console.log("nose x = "+ noseX);
console.log("nose y = "+ noseY);
}
}

function draw(){
image(video, 0, 0, 300, 300); 
image(mustage, noseX, noseY, 30, 30);
}

function take_snapshot(){
save('my_image.png');
}






