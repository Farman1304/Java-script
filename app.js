var num1 = prompt("enter number");
var result;

if (num1 % 2 ===0 ) {
    result = "even number"
} else {
    result = " odd number"
}

document.write(`<h1>The result is = ${result} <h1/>`);