var vp = document.getElementById("platziVille");
var paper = vp.getContext("2d");
var speed_text = document.getElementById("speed_text");
var button_speed = document.getElementById("button_speed");
var speed = parseInt(speed_text.value);
var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    W: 87,
    S: 83,
    A: 65,
    D: 68
};
var bg = {
    url: "tile.png",
    loadOK: false
};
var cow = {
    url: "vaca.png",
    loadOK: false
};
var dino = {
    url: "dino.png",
    loadOK: false
};
var dinoPurple = {
    url: "dino00.png",
    loadOK: false
};
var heart = {
    url: "heart.png",
    loadOK: false
};
//cantidad aleatoria de vacas cerdos y pollos 
//Hacer una granja que tiene un pastor que se puede mover con el teclado 
var movement = 40;
var x = 420;
var y = 420;
var x1 = 120;
var y1 = 120;
var x2 = x - 90;
var quantity = random(3, 10);
speed = 10;
document.addEventListener("keydown", drawKeys);
button_speed.addEventListener("click", setSpeed)

bg.object = new Image();
bg.object.src = bg.url;
bg.object.addEventListener("load", loadBg);

cow.object = new Image();
cow.object.src = cow.url;
cow.object.addEventListener("load", loadCow);

dino.object = new Image();
dino.object.src = dino.url;
dino.object.addEventListener("load", loadDino);

dinoPurple.object = new Image();
dinoPurple.object.src = dinoPurple.url;
dinoPurple.object.addEventListener("load", loadDinoPurple);

heart.object = new Image();
heart.object.src = heart.url;
heart.object.addEventListener("load", loadHeart);

function loadBg() {
    bg.loadOK = true;
    drawing();

}

function loadCow() {
    cow.loadOK = true;
    drawing();

}

function loadDino() {
    dino.loadOK = true;
    drawing();
}

function loadDinoPurple() {
    dinoPurple.loadOK = true;
    drawing();
}

function loadHeart() {
    heart.loadOK = true;
    drawing();
}

function setSpeed() {
    speed = parseInt(speed_text.value);
    if (speed_text.value.length == 0 || speed == 0) {

        alert("Speed must be a correct value, otherwise value is 10");
        return speed_text.value = 10, speed = 10;
    }
    if (speed >= 51) {
        alert("Slow down, speed value is too high!");
        return speed_text.value = 50, speed = 50;
    }
}

function drawing() {
    x2 = x - 90;
    if (bg.loadOK == true) {
        paper.drawImage(bg.object, 0, 0);
    }
    /*
    if (cow.loadOK == true) {
        console.log(quantity);
        for (var v = 0; v < quantity; v++) {
            var xi = random(0, 7);
            var yi = random(0, 7);
            var xi = xi * 60;
            var yi = yi * 60;
            // paper.drawImage(cow.object, x, y);
            paper.drawImage(cow.object, xi, yi);

        }
    }
    */
    if (dino.loadOK == true) {
        paper.drawImage(dino.object, x, y);
    }
    if (dinoPurple.loadOK == true) {
        paper.drawImage(dinoPurple.object, x1, y1);
    }
    if (heart.loadOK == true) {
        if (x1 == x2 && y == y1) {


            paper.drawImage(heart.object, x1, y1);
            paper.drawImage(heart.object, x, y);



        }
    }

}



function drawKeys(event) {


    switch (event.keyCode) {
        case keys.UP:
            console.log(y, x, y1, x1, x2);

            y = y - speed;
            if (y < -40) {
                y = 500;
            }
            drawing();
            break;
        case keys.W:
            console.log(y, x, y1, x1, x2);

            y1 = y1 - speed;
            if (y1 < -40) {
                y1 = 500;
            }
            drawing();
            break;
        case keys.DOWN:
            console.log(y, x, y1, x1, x2);

            y = y + speed;
            if (y > 500) {
                y = 0;
            }
            drawing();

            break;
        case keys.S:

            console.log(y, x, y1, x1, x2);
            y1 = y1 + speed;
            if (y1 > 500) {
                y1 = 0;
            }
            drawing();
            break;
        case keys.LEFT:

            console.log(y, x, y1, x1, x2);
            x = x - speed;
            if (x < -40) {
                x = 500;
            }
            drawing();

            break;
        case keys.A:

            console.log(y, x, y1, x1, x2);
            x1 = x1 - speed;
            if (x1 < -40) {
                x1 = 500;
            }
            drawing();
            break;
        case keys.RIGHT:

            console.log(y, x, y1, x1, x2);
            x = x + speed;
            if (x > 500) {
                x = 0;
            }
            drawing();
            break;
        case keys.D:

            console.log(y, x, y1, x1, x2);
            x1 = x1 + speed;
            if (x1 > 500) {
                x1 = 0;
            }
            drawing();
            break;

        default:
            break;
    }
}

function random(min, maxi) {
    var result;
    result = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}