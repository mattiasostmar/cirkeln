let img;
var top;

function preload() {
    img = loadImage("angsviksstenen_935x630.jpg");
}

function setup() {
    top = rectangle(30, 100, 50, 100);
    let cnv = createCanvas(935, 630);
    cnv.parent("canvas")
}

function draw() {
    background(img);
    top.show();
    
}