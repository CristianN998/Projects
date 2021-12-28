var text_lines = document.getElementById("text_lines");
var text_canvas = document.getElementById("text_canvas");
var color_user00 = document.getElementById("text_color00");
var color_user01 = document.getElementById("text_color01");
var color_user02 = document.getElementById("text_color02");
var color_user03 = document.getElementById("text_color03");

var figure_user = document.getElementById("figure_user");
var border_bool = document.getElementById("border_bool");

var border_color = document.getElementById("border_color");

var button = document.getElementById("button");
var button_clear = document.getElementById("button_clear");

button.addEventListener("click", drawByClick);

button_clear.addEventListener("click", ClearCanvas);



var color_border = border_color.value;
var d = document.getElementById("draw");

var width = text_canvas.value;
d.width = width;
d.height = width;
console.log(d.width);
console.log(document);
var canvas = d.getContext("2d");


//tener en mente el algoritmo matematico que hará la figura en el canvas
//el usuario podrá elegir el numero de lineas, el color, el tamaño del canvas



function drawLine(color, x_initial, y_initial, x_final, y_final) {
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.moveTo(x_initial, y_initial);
    canvas.lineTo(x_final, y_final);
    canvas.stroke();
    canvas.closePath();
}

function drawByClick() {

    var width = text_canvas.value;
    d.width = width;
    d.height = width;
    var textLines = parseInt(text_lines.value);
    var lines = textLines;
    var l = 0;
    var xf, yi;
    var color00 = color_user00.value;
    var color01 = color_user01.value;
    var color02 = color_user02.value;
    var color03 = color_user03.value;

    var space = width / lines;

    if (figure_user.value == "Star") {

        for (l = 0; l < lines; l++) {
            var space2 = width / 2 / lines;
            var yi3 = space2 * l;
            var a = width / 2 - yi3;
            var b = width / 2 + yi3;
            var c = width - yi3;
            drawLine(color00, yi3, width / 2, width / 2, a);
            drawLine(color01, width / 2, yi3, b, width / 2);
            drawLine(color02, yi3, width / 2, width / 2, b);
            drawLine(color03, width / 2, c, b, width / 2);
        }
    } else if (figure_user.value == "Eye") {

        for (l = 0; l < lines; l++) {
            yi = space * l;
            xf = space * (l + 1);
            drawLine(color00, width - 1, yi, xf, 0);
            drawLine(color01, 0, yi, xf, width - 1);

        }
    } else if (figure_user.value == "Square") {

        for (l = 0; l < lines; l++) {

            yi = space * l;
            xf = space * (l + 1);
            drawLine(color00, width - 1, yi, xf, 0);
            drawLine(color01, 0, yi, xf, width - 1);




            var xi2 = space * l;
            var yf2 = l * -space + (width - 10);
            drawLine(color02, 0, xi2, yf2, 0)
            drawLine(color03, xi2, width, width, yf2);




        }
    }
    if (border_bool.value == "Yes") {
        drawLine(color_border, 0, 0, 0, width);
        drawLine(color_border, 0, width, width, width);
        drawLine(color_border, width, width, width, 0);
        drawLine(color_border, 0, 0, width, 0);
        drawLine(color_border, 1, 1, 1, width);
        drawLine(color_border, 1, width, width, width);
        drawLine(color_border, width, width, width, 1);
        drawLine(color_border, 1, 1, width, 1);
    } else if (border_bool.value == "No") {
        drawLine(color_border, 0, 0, 0, 0);


    }
}


function ClearCanvas() {
    canvas.clearRect(0, 0, d.width, d.height);
}

console.log(canvas);