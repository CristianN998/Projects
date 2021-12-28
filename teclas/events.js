var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
console.log(keys);
//document.addEventListener("keydown", drawKeys);
var drawing_area = document.getElementById("drawing_area");
var paper = drawing_area.getContext("2d");
var stroke_color = document.getElementById("stroke_color");
var stroke_size = document.getElementById("stroke_size");
var eraser = document.getElementById("button_eraser");
var eraser_all = document.getElementById("button_eraser_all");
var canvas_color = document.getElementById("canvas_color");
var canvas_color_button = document.getElementById("canvas_color_button");
var width;
eraser.addEventListener("click", erase);
eraser_all.addEventListener("click", eraseAll);
canvas_color_button.addEventListener("click", changeColor);

function eraseAll(event) {
    drawing_area.width = 1000;
    drawing_area.height = 500;
    paper.fillStyle = canvas_color.value;
    paper.fillRect(0, 0, drawing_area.width, drawing_area.height);
}

function erase(event) {
    stroke_color.value = canvas_color.value;
}

function changeColor(event) {
    paper.fillStyle = canvas_color.value;
    paper.fillRect(0, 0, drawing_area.width, drawing_area.height);


}



var state = 0; // estado del click      
var x; // guardar coordenada en X
var y; // guardar coordenada en Y
document.addEventListener("mousedown", mousePressed); //cuando presionas click
document.addEventListener("mouseup", mouseUp); //cuando sueltas click
document.addEventListener("mousemove", drawMouse); //cuando mueves el mouse
document.addEventListener("click", dibujarPunto);






function dibujarPunto(evento) {
    if (estado == 0) {
        drawLine(stroke_color.value, evento.layerX, evento.layerY, evento.layerX + 1, evento.layerY + 1, papel);
    }
}

// Funcion para mousemove


function drawMouse(evento) {
    if (state == 1) { // solo se dibujara si esta el click del mouse presionado
        drawLine(stroke_color.value, x, y, evento.layerX, evento.layerY, paper);
    }
    x = evento.layerX;
    y = evento.layerY;
}

// Funcion para mousedown
function mousePressed(evento) {
    state = 1; //click presionado  
    x = evento.layerX;
    y = evento.layerY;
}

// Funcion para mouseup
function mouseUp(evento) {
    state = 0; // click suelto
    x = evento.layerX;
    y = evento.layerY;
}

function drawLine(color, x_initial, y_initial, x_final, y_final, canvas) {
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.lineWidth = parseInt(stroke_size.value);
    canvas.moveTo(x_initial, y_initial);
    canvas.lineTo(x_final, y_final);
    canvas.stroke();
    canvas.closePath();
}




//CHALLENGE
// usar el evento mouse down y mouse up, para dibujar sobre el canvas
// usando el cursor y en movil con el dedo
// usar console.log(mousedown, mouseup, click) para detectar las coordenadas
//del mouse


/*
function drawKeys(event) {
  

    switch (event.keyCode) {
        case keys.UP:
            drawLine(color, x, y, x, y - movement, paper);
            y = y - movement;
            break;
        case keys.DOWN:
            drawLine(color, x, y, x, y + movement, paper);
            y = y + movement;
            break;
        case keys.LEFT:
            drawLine(color, x, y, x - movement, y, paper);
            x = x - movement;
            break;
        case keys.RIGHT:
            drawLine(color, x, y, x + movement, y, paper);
            x = x + movement;

            break;

        default:
            break;
    }

}
*/