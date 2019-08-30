var skyHeight;
var tree2, tree4, bush2;


function preload() {
    tree2 = loadImage('assets/tree2.png');
    tree4 = loadImage('assets/tree4.png');
    bush2 = loadImage('assets/bush2.png');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    skyHeight = windowHeight * 0.25;

}

function draw() {
    drawThirdScene();
}

function drawThirdScene() {
    noStroke();
    setGradient(0, 0, windowWidth, skyHeight, color("#66CCFF"), color("#CCFFFF"));
    setGradient(0, skyHeight, windowWidth, windowHeight - skyHeight, color("#D6AD5A"), color("#A17927"));
    fill(color("#0099CC"));
    ellipseMode(CENTER);
    arc(windowWidth, skyHeight, windowWidth * 0.35 * 2, (windowHeight - skyHeight) * 2, HALF_PI, PI);

    image(tree2, -60, 0);
    image(tree2, 150, 10);
    image(tree2, 250, 20);
    image(tree2, 400, 10);
    image(tree2, 550, 10);
    image(tree2, 750, 0);

    image(bush2, -20, windowHeight * 0.32, bush2.width * 1.8, bush2.height * 1.8);

    image(tree4, 50, 20, tree4.width * 1.5, tree4.height * 1.5);
    image(tree4, 250, 20, tree4.width * 1.5, tree4.height * 1.5);
    image(tree4, 450, 30, tree4.width * 1.5, tree4.height * 1.5);
    // image(tree4, 680, 30, tree4.width * 1.5, tree4.height * 1.5);
    // image(tree2, 50, 10);
}


function setGradient(x, y, w, h, c1, c2) {
    for (var i = y; i <= y + h; i++) {
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}