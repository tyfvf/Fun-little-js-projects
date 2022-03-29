let sideA;
let sideB;
let hypotenuse;

document.getElementById('button').onclick = function() {
    sideA = document.getElementById('sideA').value;
    sideA = Number(sideA)
    sideB = document.getElementById('sideB').value;
    sideB = Number(sideB)

    hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

    document.getElementById('result').innerHTML = `The hypotenuse is equal to ` + hypotenuse.toFixed(2);
};