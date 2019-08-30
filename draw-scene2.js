var tree0, tree1, tree2, tree3;
var bush0, bush1;
var leaves0;

function preload() {
    tree0 = loadImage('assets/tree0.png');
    tree1 = loadImage('assets/tree1.png');
    tree2 = loadImage('assets/tree2.png');
    tree3 = loadImage('assets/tree3.png');
    bush0 = loadImage('assets/bush0.png');
    bush1 = loadImage('assets/bush1.png');
    leaves0 = loadImage('assets/leaves0.png');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    skyHeight = windowHeight * 0.3;
}

function draw() {
    drawSecondScene();
}

function drawSecondScene() {
    noStroke();
    // setGradient(0, 0, windowWidth, skyHeight, color("#66CCFF"), color("#CCFFFF"));
    // setGradient(0, 0, windowWidth, windowHeight, color(185, 214, 104), color(35, 132, 0));
    setGradient(0, 0, windowWidth, windowHeight, color("white"), color(35, 132, 0));
    // right side
    image(leaves0, -100, -100, leaves0.width * 1.4, leaves0.height * 1.4);
    image(leaves0, windowWidth * 0.2, -100, leaves0.width * 1.4, leaves0.height * 1.4);
    image(leaves0, windowWidth * 0.2, 0, leaves0.width * 1.4, leaves0.height * 1.4);
    image(leaves0, windowWidth * 0.4, -100, leaves0.width * 1.4, leaves0.height * 1.4);
    image(leaves0, windowWidth * 0.45, -100, leaves0.width * 1.2, leaves0.height * 1.2);
    image(leaves0, windowWidth * 0.65, -100, leaves0.width * 1.4, leaves0.height * 1.4);
    image(tree2, windowWidth - tree3.width * 0.8, -50, windowWidth * 0.5,  windowWidth * 0.5 * tree2.height / tree2.width);
    image(bush1, windowWidth - 650, windowHeight * 0.7);
    image(tree3, windowWidth - tree3.width * 0.8, -30, windowWidth * 0.6,  windowWidth * 0.6 * tree3.height / tree3.width);

    // left side
    image(tree2, -220, -100, windowWidth * 0.5,  windowWidth * 0.5 * tree2.height / tree2.width);
    image(tree1, 250, -60, windowWidth * 0.5,  windowWidth * 0.5 * tree1.height / tree1.width);
    image(tree0, 0, 0, windowWidth * 0.4, windowHeight);

    image(bush0, -50, windowHeight - bush0.height * 0.9);
}

// Top to bottom gradient color
function setGradient(x, y, w, h, c1, c2) {
    for (var i = y; i <= y + h; i++) {
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}


