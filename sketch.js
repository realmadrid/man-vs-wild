var hp;  // global health points variable
var SCENE;  // gloval scene variable
var scene1, scene2, scene3;
var music1, music2, music3, music4;  // the background sounds
var showText;  // boolean, whether show the text
var SYSTEM = 0;  // text type: system text
var HINT = 1;  // text type: hint text
var TEXT_TYPE = SYSTEM;  // set default text type: system
var cloudImg, starfish, coconut_tree, coconutImg;  // scene1 image resources
var mushroomImg1, mushroomImg2, lotusImg1, lotusImg2, lotusImg3, campImg, timberImg, chickenImg, chickenItemImg, roastImg;
var knifeImg, sawImg, knifeItemImg, sawItemImg, cornLandImg, tomatoLandImg, cornItemImg, tomatoItemImg, mushroomItemImg, cornItemImg, tomatoItemImg;
var coconut, mushrooms, mushroom1, mushroom2, mushroom3, lotuses, lotus1, lotus2, camp, fire, chicken;  // objects
var knife, saw, corn, tomato, roast;
var arrow_left, arrow_right, arrow_down;
var countClickCoconutTree, getCoconutTreeClick;  // global counters
var skyHeight;
var clouds, cloud1, cloud2;
var gameFont; // the global font
var scene1ArrowText, scene2ArrowText1, scene2ArrowText2, scene3ArrowText;
var TEXT;  // global text content
var scene1text1 = "Welcome to the most popular reality show: Man vs Wild. To win $1,000,000, you must survive on this uninhabited island for one year. Ready to go? Enjoy your journey!";
var scene1text1play = true;
var scene2FirstEntry = true;
var scene2text1play = true;
var scene2text1 = "What can I find here...\n\nMaybe I need a knife to kill the animals for meat...";
var scene3FirstEntry = true;
var scene3text1play = true;
var scene3text1 = "An abandoned camp!\nMaybe I can get something useful here...\n\n(Hint: move your mouse on the farmland to grow crops)";
var coconutTextPlay = false;
var mushroomTextPlay = false;
var chickenTextPlay = false;
var chickenRoastTextPlay = false;
var roastTextPlay = false;
var cornTextPlay = false;
var tomatoTextPlay = false;
var frameTimer = 0;
var item1, item2, item3, item4, item5, item6;  // the items in the bag

function preload() {
    // load any assets (images, sounds etc.) here
    // laod the font
    gameFont = loadFont('assets/PoetsenOne-Regular.ttf');

    // laod the background sounds  
    music1 = loadSound('assets/scene1.mp3');
    music2 = loadSound('assets/scene2.mp3');
    music3 = loadSound('assets/scene3.mp3');
    music4 = loadSound('assets/campfire.mp3');

    arrow_left = loadImage('assets/arrow_left.png');
    arrow_right = loadImage('assets/arrow_right.png');
    arrow_down = loadImage('assets/arrow_down.png');

    // load elements of scene1
    scene1 = loadImage('assets/scene1.png');
    cloudImg = loadImage('assets/cloud.png');
    starfish = loadImage('assets/starfish.png');
    coconut_tree = loadImage('assets/coconut_tree.png');
    coconutImg = loadImage('assets/coconut.png');

    // load elements of scene2
    scene2 = loadImage('assets/scene2.png');
    mushroomImg1 = loadImage('assets/mushroom1.png');
    mushroomImg2 = loadImage('assets/mushroom2.png');
    mushroomItemImg = loadImage('assets/mushroom_item.png');
    chickenImg = [
        loadImage('assets/chicken0.png'),
        loadImage('assets/chicken1.png'),
        loadImage('assets/chicken2.png'),
        loadImage('assets/chicken3.png')
    ];
    chickenItemImg = loadImage('assets/chicken_item.png');

    // load elements of scene3
    scene3 = loadImage('assets/scene3.png');
    lotusImg1 = loadImage('assets/lotus1.png')
    lotusImg2 = loadImage('assets/lotus2.png')
    lotusImg3 = loadImage('assets/lotus3.png')
    campImg = loadImage('assets/camp.png')
    fire = [
        loadImage('assets/fire1.png'),
        loadImage('assets/fire2.png'),
        loadImage('assets/fire3.png')
    ];
    timberImg = loadImage('assets/timber.png');
    knifeImg = loadImage('assets/knife.png');
    knifeItemImg = loadImage('assets/knife_item.png');
    sawImg = loadImage('assets/saw.png');
    sawItemImg = loadImage('assets/saw_item.png');
    cornLandImg = [
        loadImage('assets/corn_land0.png'),
        loadImage('assets/corn_land1.png'),
        loadImage('assets/corn_land2.png'),
        loadImage('assets/corn_land3.png')
    ];
    tomatoLandImg = [
        loadImage('assets/corn_land0.png'),
        loadImage('assets/tomato_land1.png'),
        loadImage('assets/tomato_land2.png'),
        loadImage('assets/tomato_land3.png')
    ];
    cornItemImg = loadImage('assets/corn_item.png');
    tomatoItemImg = loadImage('assets/tomato_item.png');

    roastImg = [
        loadImage('assets/roast0.png'),
        loadImage('assets/roast1.png'),
        loadImage('assets/roast2.png'),
        loadImage('assets/roast3.png')
    ];

}

// Initialize the variables
function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
    hp = 40;
    skyHeight = windowHeight * 0.4;
    fill(color("#FF3399"));
    textFont(gameFont, 30);
    scene1ArrowText = "explore the island";
    scene2ArrowText1 = "go to beach";
    scene2ArrowText2 = "explore the island";
    scene3ArrowText = "go to forest";
    TEXT = scene1text1;
    showText = true;

    SCENE = 1;
    countClickCoconutTree = 0;
    getCoconutTreeClick = 2;
    cloud1 = new Cloud(-20, 15);
    cloud2 = new Cloud(-600, 40);
    clouds = [cloud1, cloud2];

    mushroom1 = new Mushroom(width * 0.6 + 80, height - 100, mushroomImg1);
    mushroom2 = new Mushroom(mushroom1.x + 90, mushroom1.y + 20, mushroomImg2);
    mushroom3 = new Mushroom(mushroom1.x + 250, mushroom1.y, mushroomImg2);
    mushrooms = [mushroom1, mushroom2, mushroom3];
    item3 = new BagItem(windowWidth / 2 - 200 + 5 + 120, windowHeight - knifeItemImg.height - 30, "mushroom", mushroomItemImg);

    chicken = new Chicken(windowWidth / 2 - chickenImg[0].width / 2 + 130, windowHeight - chickenImg[0].height, chickenImg);
    item6 = new BagItem(windowWidth / 2 - 200 + 5 + 305, windowHeight - 50, "chicken", chickenItemImg);

    lotus1 = new Lotus(windowWidth - lotusImg1.width * 1.2, windowHeight * 0.3, 1);
    lotus2 = new Lotus(windowWidth - lotusImg3.width, windowHeight - lotusImg3.height * 1.3, 2);
    lotuses = [lotus1, lotus2];

    camp = new Camp(windowWidth * 0.4, windowHeight * 0.55);
    knife = new Knife(camp.x + campImg.width, camp.y + campImg.height * 0.3);
    saw = new Saw(camp.x + campImg.width * 1.5, camp.y + campImg.height * 0.4)
    roast = new Roast(camp.x + 90, camp.y - 5, roastImg);

    item1 = new BagItem(windowWidth / 2 - 200 + 5, windowHeight - 40, "knife", knifeItemImg);
    item1.canBeConsumed = false;

    item2 = new BagItem(windowWidth / 2 - 200 + 5 + 60, windowHeight - 50, "saw", sawItemImg);
    item2.canBeConsumed = false;

    tomato = new Tomato(0, windowHeight * 0.5, 0);
    corn = new Corn(tomato.x + 300, tomato.y, 0);
    
    item4 = new BagItem(windowWidth / 2 - 200 + 5 + 185, windowHeight - 55, "corn", cornItemImg);
    item5 = new BagItem(windowWidth / 2 - 200 + 5 + 240, windowHeight - 50, "tomato", tomatoItemImg);

    bagItems = [item1, item2, item3, item4, item5, item6];

}

function draw() {
    // your "draw loop" code goes here
    if (SCENE == 1) {
        drawScene1();
    } else if (SCENE == 2) {
        drawScene2();
    } else if (SCENE == 3) {
        drawScene3();
    }
    drawBottom();
    loseHealthPoint();
    playMusic();
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

// The man will lose 1 health point every 300 frames
function loseHealthPoint() {
    if (frameCount % 300 == 0 && hp > 1) {
        hp -= 1;
    }
}

function drawScene1() {
    background(scene1);
    // draw starfish
    image(starfish, width * 0.3, height * 0.8);
    image(starfish, width * 0.8, height * 0.5, starfish.width * 0.6, starfish.height * 0.6);

    // draw coconut trees
    image(coconut_tree, width - coconut_tree.width * 0.8, height * 0.8 - coconut_tree.height);
    image(coconut_tree, width - coconut_tree.width * 0.75, height - coconut_tree.height);
    
    if (coconut != null) {
        coconut.draw();
    }

    // draw clouds
    clouds.forEach(c => {
        c.draw();
    });
    
}

function drawScene2() {
    background(scene2);

    mushrooms.forEach(m => {
        m.draw();
    });

    if (!chicken.picked) {
        chicken.draw();
    }
}

function drawScene3() {
    background(scene3);

    lotuses.forEach(l => {
        l.draw();
    });

    camp.draw();
    if (roast.exist) {
        roast.draw();
    }
    image(timberImg, camp.x + campImg.width, camp.y + campImg.height * 0.3);
    knife.draw();
    saw.draw();
    corn.draw();
    tomato.draw();
}

// Draw the bag or the message box
function drawBottom() {
    if (SCENE == 1 && frameCount > 1000) {
        drawArrowDown();
        text(scene1ArrowText, arrow_down.width + 5, windowHeight - 18);
    }
    else if (SCENE == 2) {
        drawArrowLeft();
        text(scene2ArrowText1, arrow_left.width + 5, windowHeight - 18);
        if (frameCount > 1800) {
            drawArrowRight();
            text(scene2ArrowText2, windowWidth - arrow_right.width - textWidth(scene2ArrowText2) - 5, windowHeight - 18);
        }
    }
    else if (SCENE == 3) {
        drawArrowLeft();
        text(scene3ArrowText, arrow_left.width + 5, windowHeight - 20);
    }

    if (!showText) {
        drawBag();
    } else {
        // draw the message box
        push();
        rectMode(CENTER);
        fill(color("#004080"));
        rect(windowWidth / 2, windowHeight / 2, 600, 200, 20);
        pop();

        // determine the text content
        if (SCENE == 1 && scene1text1play) {
            scene1text1play = false;
            TEXT = scene1text1;
        } else if (SCENE == 2 && scene2text1play) {
            scene2text1play = false;
            TEXT = scene2text1;
        } else if (SCENE == 2 && chickenTextPlay) {
            chickenTextPlay = false;
            if (!knife.picked) {
                TEXT = "I need a knife to kill the chicken...";
            } else {
                TEXT = "Yes! Winner winner chicken dinner!\n\nGo to camp to enjoy roast chicken!";
            }
        } else if (SCENE == 3 && scene3text1play) {
            scene3text1play = false;
            TEXT = scene3text1;
        } else if (SCENE == 1 && coconutTextPlay) {
            coconutTextPlay = false;
            if (coconut.consumed) {
                TEXT = "(Crack teh coconut with your saw)\n\nUmmmm... The coconut tastes good!";
            } else {
                TEXT = "Oh no... I can't crack the coconut!\n\n(Hint: try to find a tool)";
            }
        } else if (mushroomTextPlay) {
            mushroomTextPlay = false;
            TEXT = "Well, the mushroom tastes not that good.";
        } else if (tomatoTextPlay) {
            tomatoTextPlay = false;
            TEXT = "Feel better... \n\nI can survive with these tomatoes!";
        } else if (cornTextPlay) {
            cornTextPlay = false;
            TEXT = "My roast corn tastes good!\n\nI'm sure I can survive!";
        } else if (chickenRoastTextPlay) {
            chickenRoastTextPlay = false;
            TEXT = "Yes! \n\nThe chicken is being roasted!!!";
        } else if (roastTextPlay) {
            roastTextPlay = false;
            TEXT = "This is definitely the most delicious roast chicken in the world!\n\nAm I in the heaven?";
        }

        text(TEXT, windowWidth / 2 - 300 + 10, windowHeight / 2 - 100 + 10, 600 - 10, 200 - 10);
        
        // different text has different duration
        if (TEXT_TYPE == SYSTEM) {
            if (frameCount - frameTimer > 400) {
                frameTimer = frameCount;
                showText = false;
            }
        } else if (TEXT_TYPE == HINT) {
            if (frameCount - frameTimer > 150) {
                frameTimer = frameCount;
                showText = false;
            }
        }
        
    }
}

// Draw the bag and health points
function drawBag() {
    push();
    rectMode(CENTER);
    fill(color("#d1d1e0"));
    rect(windowWidth / 2, windowHeight - 30, 400, 60, 20);
    fill(color("#ff8080"));
    text("Health: " + hp, windowWidth / 2 + 200 + 5, windowHeight - 18);
    pop();

    bagItems.forEach(i => {
        if (i != null && !i.consumed) {
            i.draw();
        }
    });

}

function drawArrowDown() {
    image(arrow_down, 0, windowHeight - arrow_down.height);
}

function drawArrowRight() {
    image(arrow_right, windowWidth - arrow_right.width, windowHeight - arrow_right.height);
}

function drawArrowLeft() {
    image(arrow_left, 0, windowHeight - arrow_left.height);
}

// Item object in the bag
function BagItem(x, y, name, img) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.canBeConsumed = true;
    this.consumed = true;
    this.img = img;

    this.draw = function() {
        if (!this.consumed) {
            image(this.img, this.x, this.y);
        }
    }

    this.consume = function() {
        if(this.canBeConsumed && !this.consumed) {
            if (this.name == "mushroom") {
                this.consumed = true;
                hp += mushroom1.hp;
                showText = true;
                frameTimer = frameCount;
                TEXT_TYPE = HINT;
                mushroomTextPlay = true;
            } else if (this.name == "corn") {
                this.consumed = true;
                hp += corn.hp;
                showText = true;
                frameTimer = frameCount;
                TEXT_TYPE = HINT;
                cornTextPlay = true;
            } else if (this.name == "tomato") {
                this.consumed = true;
                hp += tomato.hp;
                showText = true;
                frameTimer = frameCount;
                TEXT_TYPE = HINT;
                tomatoTextPlay = true;
            } else if (this.name == "chicken") {
                this.consumed = true;
                showText = true;
                frameTimer = frameCount;
                TEXT_TYPE = HINT;
                chickenRoastTextPlay = true;
                roast.exist = true;
                camp.fired = true;
            }
        }
    }

    this.isMouseClicked = function() {
        if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
            return true;
        }
        return false;  
    }
}

function Cloud(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 2);

    this.draw = function() {
        this.x += this.speed;
        noStroke();
        image(cloudImg, this.x, this.y);

        if (this.x > windowWidth) {
            this.x = -60;
        }
    };
}

function Coconut() {
    this.x = random(width - coconut_tree.width * 0.6, width - coconutImg.width);
    this.y = random(height * 0.4, height * 0.7);
    this.onGround = false;
    this.speed = 2;
    this.consumed = false;
    this.hp = 5;

    this.draw = function() {
        if (this.y >= height - coconutImg.height * 1.4) {
            this.onGround = true;
        }
        if (!this.onGround) {
            this.speed += 0.5;
            this.y += this.speed;
        }
        if (!this.consumed) {
            image(coconutImg, this.x, this.y);
        }
    }

    // the coconut can be consumed only when the saw is obtained
    this.consume = function() {
        if (!this.consumed && !saw.picked) {
            showText = true;
            coconutTextPlay = true;
            frameTimer = frameCount;
            TEXT_TYPE = HINT;
        }
        else if (!this.consumed && saw.picked) {
            showText = true;
            coconutTextPlay = true;
            frameTimer = frameCount;
            TEXT_TYPE = HINT;
            hp += this.hp;
            this.consumed = true;
        }
    }

    this.isMouseClicked = function() {
        if (mouseX > this.x && mouseX < this.x + coconutImg.width && mouseY > this.y && mouseY < this.y + coconutImg.height) {
            return true;
        }
        return false;
    }
}

function Mushroom(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.picked = false;
    this.picking = false;
    this.offsetY = y - 15;
    this.hp = int(random(3, 5));

    this.draw = function() {
        if (!this.picked) {
            if (this.picking && this.y > this.offsetY) {
                this.y -= 0.4;
            }
            if (this.y <= this.offsetY) {
                this.picked = true;
                this.picking = false;
                item3.consumed = false;
            }

            image(this.img, this.x, this.y, this.img.width * 1.2, this.img.height * 1.2);
        }
    }

    this.isMouseClicked = function() {
        if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
            this.picking = true;
        }
    }
}

function Chicken(x, y, imgs) {
    this.x = x;
    this.y = y;
    this.imgs = imgs;
    this.img = imgs[0];
    this.picked = false;
    this.picking = false;
    this.offsetY = y - 15;

    this.draw = function() {
        if (!this.picked) {
            if (this.picking && this.y > this.offsetY) {
                this.y -= 0.4;
            }
            if (this.y <= this.offsetY) {
                this.picked = true;
                this.picking = false;
                item6.consumed = false;
            }
            if (frameCount % 100 < 20) {
                this.img = this.imgs[0];
            } else if (frameCount % 100 < 40) {
                this.img = this.imgs[1];
            } else if (frameCount % 100 < 60) {
                this.img = this.imgs[2];
            } else if (frameCount % 100 < 80) {
                this.img = this.imgs[3];
            } else if (frameCount % 100 >= 80) {
                this.img = this.imgs[0];
            }
            image(this.img, this.x, this.y);
        }
    }

    this.pick = function() {
        if (!knife.picked) {
            showText = true;
            chickenTextPlay = true;
            frameTimer = frameCount;
            TEXT_TYPE = HINT;
        }
        else if (knife.picked) {
            chicken.picking = true;
            showText = true;
            chickenTextPlay = true;
            frameTimer = frameCount;
            TEXT_TYPE = HINT;
        }
    }

    this.isMouseClicked = function() {
        if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
            return true;
        }
        return false;
    }
}

function Roast(x, y, imgs) {
    this.x = x;
    this.y = y;
    this.imgs = imgs;
    this.img = imgs[0];
    this.exist = false;
    this.picked = false;
    this.picking = false;
    this.offsetY = y - 15;
    this.hp = 25;

    this.draw = function() {
        if (!this.picked) {
            if (this.picking && this.y > this.offsetY) {
                this.y -= 0.4;
            }
            if (this.y <= this.offsetY) {
                this.picked = true;
                this.picking = false;
                this.exist = false;
                hp += this.hp;
                showText = true;
                roastTextPlay = true;
                frameTimer = frameCount;
                TEXT_TYPE = SYSTEM;
            }
            // roast chicken animation
            if (frameCount % 96 < 16) {
                this.img = this.imgs[0];
            } else if (frameCount % 96 < 32) {
                this.img = this.imgs[1];
            } else if (frameCount % 96 < 48) {
                this.img = this.imgs[2];
            } else if (frameCount % 96 < 64) {
                this.img = this.imgs[3];
            } else if (frameCount % 96 < 80) {
                this.img = this.imgs[2];
            } else if (frameCount % 96 >= 80) {
                this.img = this.imgs[1];
            }
            image(this.img, this.x, this.y);
        }
    }

    this.pick = function() {
        this.picking = true;
    }

    this.isMouseClicked = function() {
        if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
            return true;
        }
        return false;
    }
}

function Lotus(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.bloomed = false;

    this.draw = function() {
        if (this.type == 1) {
            if (!this.bloomed) {
                image(lotusImg1, this.x, this.y);
            } else {
                image(lotusImg2, this.x, this.y);
            }
        } else if (this.type == 2) {
            image(lotusImg3, this.x, this.y);
        }
    }

    this.isMouseClicked = function() {
        if (mouseX > this.x && mouseX < this.x + lotusImg1.width && mouseY > this.y && mouseY < this.y + lotusImg1.height) {
            this.bloomed = true;
        }
    }
}

function Camp(x, y) {
    this.x = x;
    this.y = y;
    this.fireImg = null;
    this.fired = false;

    this.draw = function() {
        image(campImg, this.x, this.y);

        if (this.fired) {
            if (frameCount % 30 < 10) {
                this.fireImg = fire[0];
            } else if (frameCount % 30 > 20) {
                this.fireImg = fire[1];
            } else {
                this.fireImg = fire[2];
            }
            image(this.fireImg, this.x + campImg.width * 0.55, this.y + campImg.height * 0.25);
        }
    }

    this.isMouseClicked = function() {
        if (mouseX > this.x && mouseX < this.x + campImg.width && mouseY > this.y && mouseY < this.y + campImg.height) {
            this.fired = true;
        }
    }
}

function Tool(x, y) {
    this.x = x;
    this.y = y;
    this.img = null;
    this.picking = false;
    this.picked = false;
    this.offsetY = y - 15;

    this.draw = function() {
        if (!this.picked) {
            if (this.picking && this.y > this.offsetY) {
                this.y -= 0.4;
            }
            if (this.y <= this.offsetY) {
                this.picked = true;
                this.picking = false;
            }
            image(this.img, this.x, this.y);
        }
    }

    this.isMouseClicked = function() {
        if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
            this.picking = true;
        }
    }
}

function Knife(x, y) {
    Tool.call(this, x, y);
    this.img = knifeImg;

    this.draw = function() {
        if (!this.picked) {
            if (this.picking && this.y > this.offsetY) {
                this.y -= 0.4;
            }
            if (this.y <= this.offsetY) {
                this.picked = true;
                this.picking = false;
                item1.consumed = false;
            }
            image(this.img, this.x, this.y);
        }
    }
}

function Saw(x, y) {
    Tool.call(this, x, y);
    this.img = sawImg;

    this.draw = function() {
        if (!this.picked) {
            if (this.picking && this.y > this.offsetY) {
                this.y -= 0.4;
            }
            if (this.y <= this.offsetY) {
                this.picked = true;
                this.picking = false;
                item2.consumed = false;
            }
            image(this.img, this.x, this.y);
        }
    }
}

function Crop(x, y, imgs) {
    this.x = x;
    this.y = y;
    this.growth = 0;
    this.imgs = imgs;
    this.img = null;
    this.stage = 0;  // crop has 4 stages
    this.readyToCollect = false;  // whether the crop can be collected
    this.picked = false;
    this.mX = 0;
    this.mY = 0;
    this.hp = 0;

    this.isWorkingOn = function() {
        if (mouseX != this.mX || mouseY != this.mY) {
            this.mX = mouseX;
            this.mY = mouseY;
            return true;
        }
        return false;
    }

    this.grow = function() {
        this.growth += 1;
        if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
            if (this.isWorkingOn()) {
                this.growth += 10;
            }
        }

        if (this.growth > 1000 && this.stage < 3) {
            this.stage += 1;
            this.growth = 0;
        }
    }

    this.draw = function() {
        if (this.stage == 0) {
            this.img = this.imgs[0];
        } else if (this.stage == 1) {
            this.img = this.imgs[1];
        } else if (this.stage == 2) {
            this.img = this.imgs[2];
        } else if (this.stage == 3) {
            this.img = this.imgs[3];
        }
        image(this.img, this.x, this.y);
        if (!this.readyToCollect) {
            this.grow();
            if (this.stage == 3) {
                this.readyToCollect = true;
            }
        }

        if (this.picked) {
            this.stage = 0;
            this.growth = 0;
        }
    }

    this.collect = function() {
        this.stage = 0;
        this.growth = 0;
        this.readyToCollect = false;
        this.picked = false;
    }

    this.isMouseClicked = function() {
        if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
            return true;
        }
        return false;
    }
}

function Corn(x, y, stage) {
    Crop.call(this, x, y, cornLandImg);
    this.stage = stage;
    this.hp = 8;

    this.collect = function() {
        this.stage = 0;
        this.growth = 0;
        this.readyToCollect = false;
        this.picked = false;
        item4.consumed = false;
    }
}

function Tomato(x, y, stage) {
    Crop.call(this, x, y, tomatoLandImg);
    this.stage = stage;
    this.hp = 6;

    this.collect = function() {
        this.stage = 0;
        this.growth = 0;
        this.readyToCollect = false;
        this.picked = false;
        item5.consumed = false;
    }
}

// Play background music for certain scene
function playMusic() {
    if (SCENE == 1) {
        if (music2.isPlaying()) {
            music2.stop();
        }
        if (music3.isPlaying()) {
            music3.stop();
        }
        if (music4.isPlaying()) {
            music4.stop();
        }
        if (!music1.isPlaying()) {
            music1.playMode('restart');
            music1.setLoop(true);
            music1.play();
        }
    } else if (SCENE == 2) {
        if (music1.isPlaying()) {
            music1.stop();
        }
        if (music3.isPlaying()) {
            music3.stop();
        }
        if (music4.isPlaying()) {
            music4.stop();
        }
        if (!music2.isPlaying()) {
            music2.playMode('restart');
            music2.setLoop(true);
            music2.play();
        }
    } else if (SCENE == 3) {
        if (music1.isPlaying()) {
            music1.stop();
        }
        if (music2.isPlaying()) {
            music2.stop();
        }
        if (!music3.isPlaying()) {
            music3.playMode('restart');
            music3.setLoop(true);
            music3.play();
        }
        // play the sound of campfire if fired
        if (camp.fired && !music4.isPlaying()) {
            music4.playMode('restart');
            music4.setLoop(true);
            music4.setVolume(0.5);
            music4.play();
        }
    }
}

function mouseClicked() {
    if (SCENE == 1) {
        if (mouseX > width - coconut_tree.width * 0.6 && mouseY > height * 0.4 && mouseY < height * 0.7) {
            countClickCoconutTree += 1;
            if (countClickCoconutTree >= getCoconutTreeClick) {
                countClickCoconutTree = 0;
                getCoconutTreeClick += 1;
                coconut = new Coconut();
            }
        }

        if (mouseX <= arrow_down.width && mouseY > windowHeight - arrow_down.height) {
            scene1ArrowText = "go to forest";
            SCENE = 2;
            if (scene2FirstEntry) {
                frameTimer = frameCount;
                TEXT_TYPE = SYSTEM;
                showText = true;
                scene2FirstEntry = false;
            }
        }

        if (coconut != null && !coconut.consumed && coconut.isMouseClicked()) {
            coconut.consume();
        }
    }

    else if (SCENE == 2) {
        mushrooms.forEach(m => {
            if (!m.picked) {
                m.isMouseClicked();
            }
        });

        if (mouseX <= arrow_left.width && mouseY >= windowHeight - arrow_left.height) {
            SCENE = 1;
        }
        if (mouseX >= windowWidth - arrow_right.width && mouseY >= windowHeight - arrow_right.height) {
            SCENE = 3;
            scene2ArrowText2 = "go to camp";
            if (scene3FirstEntry) {
                frameTimer = frameCount;
                TEXT_TYPE = SYSTEM;
                showText = true;
                scene3FirstEntry = false;
            }
        }

        if (!chicken.picked && chicken.isMouseClicked()) {
            chicken.pick();
        }
    }

    else if (SCENE == 3) {
        if (!lotus1.bloomed) {
            lotus1.isMouseClicked();
        }

        if (!camp.fired) {
            camp.isMouseClicked();
        }

        if (!knife.picked) {
            knife.isMouseClicked();
        }

        if (!saw.picked) {
            saw.isMouseClicked();
        }

        if (mouseX <= arrow_left.width && mouseY >= windowHeight - arrow_left.height) {
            SCENE = 2;
            camp.fired = false;
        }

        if (tomato.stage == 3 && tomato.readyToCollect && tomato.isMouseClicked()) {
            tomato.collect();
        }

        if (corn.stage == 3 && corn.readyToCollect && corn.isMouseClicked()) {
            corn.collect();
        }

        if (roast != null && roast.exist && roast.isMouseClicked()) {
            roast.pick();
        }
    }

    bagItems.forEach(i => {
        if (i != null && i.canBeConsumed && !i.consumed && i.isMouseClicked()) {
            i.consume();
        }
    });
}
