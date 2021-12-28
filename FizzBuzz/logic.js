var index_text = document.getElementById("index"),
    numbers_text = document.getElementById("numbers"),
    button = document.getElementById("button"),
    divisor_text = document.getElementById("divisor"),
    divisor_text2 = document.getElementById("divisor2");

var index = parseInt(index_text.value),
    numbers = parseInt(numbers_text.value),
    divisor = parseInt(divisor_text.value),
    divisor2 = parseInt(divisor_text2.value);
button.addEventListener("click", set)

var result = document.getElementById("result");

function set() {
    index = parseInt(index_text.value),
        numbers = parseInt(numbers_text.value),
        divisor = parseInt(divisor_text.value),
        divisor2 = parseInt(divisor_text2.value),

        FizzBuzz(index, numbers);

}


function FizzBuzz(index, numbers) {

    for (index; index < numbers; index++) {

        if (numDivisible(index, divisor)) {

            document.write("Fizz");


        }
        if (numDivisible(index, divisor2)) {
            document.write("Buzz");



        }
        if (!numDivisible(index, divisor) && !numDivisible(index, divisor2)) {

            document.write(index);

        }

        document.write("<br> <strong>");

    }

}
//cuando una funcion hace return no se ejecuta más

function numDivisible(num, divisor) {
    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }
}