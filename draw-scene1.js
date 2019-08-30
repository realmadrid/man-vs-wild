var bg;
var skyHeight;
var sun, sky, sea, hill1, hill2;
var cloud;


function setup() {
    createCanvas(windowWidth, windowHeight);
    skyHeight = windowHeight * 0.4;
    // var backBtn = select('nav');
    // backBtn.style("z-index", "100");
    bg = 0;
    initFirstScene();
}

function draw() {
    if (bg == 0) {
        showFirstScene();
    } else {
        hideFirstScene();
    }
}

function showFirstScene() {
    sun.style("visibility", "visible");
    sky.style("visibility", "visible");
    sea.style("visibility", "visible");
    hill1.style("visibility", "visible");
    hill2.style("visibility", "visible");
}

function hideFirstScene() {
    sun.style("visibility", "hidden");
    sky.style("visibility", "hidden");
    sea.style("visibility", "hidden");
    hill1.style("visibility", "hidden");
    hill2.style("visibility", "hidden");

}


function initFirstScene() {
    createSun();
    createSky();
    createSea();
    createHills();
}

// Create the sun div
function createSun() {
    sun = createDiv();
    sun.position(100, 60);
    sun.style("width", "70px");
    sun.style("height", "70px");
    sun.style("border-radius", "50%");
    sun.style("background", "white");
    sun.style("opacity", "0.9");
    sun.style("box-shadow", "0px 0px 40px 15px white");
}

// Create the sky div
function createSky() {
    sky = createDiv();
    sky.position(0, 0);
    sky.style("width", "100%");
    sky.style("height", "40%");
    sky.style("z-index", "-10");
    sky.style("background", "linear-gradient(to bottom, #66CCFF , #CCFFFF)");
}

// Create the sea div
function createSea() {
    sea = createDiv();
    sea.position(0, skyHeight);
    sea.style("width", "100%");
    sea.style("height", "60%");
    sky.style("z-index", "-10");
    sea.style("background", "linear-gradient(to bottom right, #3399CC 35%, rgb(233, 225, 209) 60%)");
}

// Create divs for hills
function createHills() {
    hill1 = createDiv();
    hill1.position(windowWidth * 0.66, windowHeight * 0.24);
    hill1.style("width", "68%");
    hill1.style("height", "16%");
    hill1.style("background-color", "rgb(19, 160, 100)");
    hill1.style("border-radius", "50% / 100%");
    hill1.style("border-bottom-left-radius", "0");
    hill1.style("border-bottom-right-radius", "0");
    hill1.style("z-index", "-9");

    hill2 = createDiv();
    hill2.position(windowWidth * 0.8, windowHeight * 0.18);
    hill2.style("width", "40%");
    hill2.style("height", "22%");
    hill2.style("background-color", "rgb(0, 153, 102)");
    hill2.style("border-radius", "50% / 100%");
    hill2.style("border-bottom-left-radius", "0");
    hill2.style("border-bottom-right-radius", "0");
    hill2.style("z-index", "-8");
}

function Cloud() {
    this.x = -20;
    this.y = random(10, 30);
    this.speed = random(1, 3);

    this.draw = function() {
        this.x += this.speed;
        noStroke();
        arc(this.x, this.y, 40, 20, -PI, 0);
        if (this.x > windowWidth) {
            this.x = -20;
        }
    };

}

