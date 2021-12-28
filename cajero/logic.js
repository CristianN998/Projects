//declaring variables
class Cash {

    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.image = new Image();

        this.image.src = images[this.valor];
    }
    show() {
        document.body.appendChild(this.image);

    }

}

var sounds = {
    tecla: document.getElementById("tecla_id"),
    alerta: document.getElementById("alerta_id"),
    entrega: document.getElementById("entrega_id"),
};
var images = [];
images[100] = "100.jpg";
images[50] = "50.jpg";
images[20] = "20.jpg";
images[10] = "10.jpg";
images[5] = "5.jpg";
images[2] = "2.jpg";
images[1] = "1.jpg";

var caja = [];
caja.push(new Cash(100, 30));
caja.push(new Cash(50, 30));
caja.push(new Cash(20, 30));
caja.push(new Cash(10, 30));
caja.push(new Cash(5, 30));
caja.push(new Cash(2, 30));
caja.push(new Cash(1, 30));

var result = document.getElementById("result");
var carga = document.getElementById("carga_id");
var available = document.getElementById("available_text");
var b = document.getElementById("go_button");
var papers;
var div;
var money;
var available_money = 0;
var delivered = [];

available.value = available_money.toString();
//other events and functions
contador();
b.addEventListener("click", insertarDInero);
document.addEventListener("keydown", keySound)

//declaring functions
function keySound() {
    sounds.tecla.play();
}

function contador() { // total money of the caja
    for (v of caja) {
        available_money = available_money + (v.valor * v.cantidad);
        available.value = available_money;
    }
}

function insertarDInero() {
    delivered.splice(0, delivered.length);
    var t = document.getElementById("money_text"); //reset delivered array
    money = parseInt(t.value);
    compatibilidad();
}

function compatibilidad() {
    if (money > available_money) {
        sounds.alerta.play();
        carga.innerHTML = "I'm a poor ATM I don't have that amount of money:(";

    } else {
        if (money > 0) {
            deliverCash();
        } else if (money == 0) {
            sounds.alerta.play();
            carga.innerHTML = "Why are you here?";
        } else if (money < 0) {
            sounds.alerta.play();
            carga.innerHTML = "Negative values are not compatible";
        }
    }

}

function deliverCash() {
    for (v of caja) {
        if (money > 0) {
            div = parseInt(money / v.valor) //number of necessary bills
            if (div > v.cantidad) { //
                papers = v.cantidad;
                available_money = available_money - (v.valor * v.cantidad);
                available.value = available_money;
                money = money - (v.valor * v.cantidad);
                delivered.push(new Cash(v.valor, papers));
                v.cantidad = 0 //bills over
                check();
            } else { //if bills are more than enough
                papers = div;
                available_money = available_money - (v.valor * div);
                available.value = available_money;
                money = money - (v.valor * div);
                delivered.push(new Cash(v.valor, papers));
                v.cantidad = v.cantidad - div;
                check();

            }
        }
    }
}

function check() {
    if (money == 0) {
        sounds.entrega.play();
        carga.innerHTML += "<br> You withdraw: <br>";
        for (e of delivered) {
            carga.innerHTML = "↓Claim your money down below↓ <br> "
            for (var i = 0; i < e.cantidad; i++) {
                carga.innerHTML += "<br>" + "<br> <img src=" + e.image.src + " />";
            }
        }
    } else {
        sounds.alerta.play();
        carga.innerHTML = "We don't have enough bills";
    }
}