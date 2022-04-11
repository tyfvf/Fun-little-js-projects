const result = document.querySelector('#result');

let num_one;
let num_two;
let math;
let operation;

document.querySelector('#button').addEventListener('click', () => {
    num_one = document.querySelector('#number1').value;
    num_two = document.querySelector('#number2').value;
    operation = document.querySelector('#operation').value;

    if(num_one == '' || num_two == '' && operation != 'sqrt'){
        result.textContent = `Please fill the two number's field`;
    }else{
        switch(operation){
            case 'addition':
                math = Number(num_one) + Number(num_two);
                result.textContent = `${num_one} + ${num_two} = ${math}`;
                break;
            case 'subtraction':
                math = Number(num_one) - Number(num_two);
                result.textContent = `${num_one} - ${num_two} = ${math}`;
                break;
            case 'multiplication':
                math = Number(num_one) * Number(num_two);
                result.textContent = `${num_one} X ${num_two} = ${math}`;
                break;
            case 'division':
                math = Number(num_one) / Number(num_two);
                result.textContent = `${num_one} / ${num_two} = ${math}`;
                break;
            case 'exponentiation':
                math = Math.pow(Number(num_one), Number(num_two));
                result.textContent = `${num_one} to the ${num_two} power = ${math}`;
                break;
            case 'sqrt':
                math = Math.sqrt(Number(num_one));
                document.querySelector("#number2").value = '';
                result.textContent = `²√ ${num_one} = ${math}`;
                break;
            case 'percent':
                math = Number(num_one) * Number(num_two) / 100;
                result.textContent = `${num_two}% of ${num_one} = ${math}`;
        };
    };
});