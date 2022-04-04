const number = Math.floor(Math.random() * 10 + 1);
let cont = 1;

document.getElementById('button').onclick = function () {

    guess = document.getElementById('number').value;
    
    if(Number(guess) == number){
        document.getElementById('answer').innerHTML = `That's right, it took you ${cont} tries.`;
    }else if(Number(guess) < number) {
        cont ++;
        document.getElementById('answer').innerHTML = 'More';
    }else {
        cont ++;
        document.getElementById('answer').innerHTML = 'Less';
    };
};
