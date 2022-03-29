let count = 0;

document.getElementById('plus').onclick = function() {
    count ++;
    document.getElementById('number').innerHTML = count;
};

document.getElementById('minus').onclick = function() {
    count --;
    document.getElementById('number').innerHTML = count;
};

document.getElementById('reset').onclick = function() {
    count = 0;
    document.getElementById('number').innerHTML = count;
};