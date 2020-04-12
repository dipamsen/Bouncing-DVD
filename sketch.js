var dvd;
var xSpeed = 3;
var ySpeed = 4;
var xPosition,yPosition;
var imgwidth, imgheight;
function preload(){
    dvd = loadImage('DVD logo.png');
}

function setup(){
    createCanvas(1100, 700);
    xPosition = width/2; yPosition = height/2;
    imgwidth = 200
    imgheight = imgwidth*653/1280;
}

function draw(){
    background(255);
    image(dvd, xPosition, yPosition, imgwidth, imgheight);
    xPosition += xSpeed; yPosition += ySpeed;
    if(xPosition+imgwidth >= width || xPosition <=0){
        xSpeed = -1*xSpeed;
    }
    if(yPosition+imgheight >= height || yPosition <=0){
        ySpeed = -1*ySpeed;
    }
}