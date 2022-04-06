let sec = 0;
let min = 0;
let hour = 0;
let running = false;

check();
setInterval(check, 1000);

document.getElementById('start').onclick = function () {
    running = true;
 
};

document.getElementById('pause').onclick = function () {
    running = false;
};

document.getElementById('reset').onclick = function () {
    running = false;
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById('seconds').innerHTML = '0' + sec;
    document.getElementById('minutes').innerHTML = '0' + min;
    document.getElementById('hours').innerHTML = '0' + hour;
};

function check(){
    if(running){
        update();
    };
};

function update() {
    sec ++;
    sec = sec.toString();

    if(sec >= 60){
        sec = '0';
        min ++;
        min = min.toString();

        if(min.length < 2){
            min = '0' + min;
        };

        document.getElementById('minutes').innerHTML = min;
    };

    if(min >= 60){
        min = '0';
        hour++;
        hour = hour.toString();

        if(hour.length < 2){
            hour = '0' + hour;
        };

        document.getElementById('hours').innerHTML = hour;
    };

    if(sec.length < 2){
        sec = '0' + sec;
    };
    

    document.getElementById('seconds').innerHTML = sec;
};