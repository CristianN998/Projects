class Pakiman {

    constructor(n, t, h, a) {
        this.image = new Image();
        this.name = n;
        this.type = t;
        this.health = h;
        this.attack = a;
        this.image.src = images[this.name];
    }
    talk() {

    }
    show() {
        document.write("<p> <hr>");
        document.write("<strong> " + this.name + "</strong> <br>");
        document.write("<strong> " + this.type + "</strong> <br>");
        document.write("<strong> " + this.health + "</strong> <br>");
        document.write("<strong> " + this.attack + "</strong> <br> ");
        document.body.appendChild(this.image);
        document.write("</p>");
    }
}