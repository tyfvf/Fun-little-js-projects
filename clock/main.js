let label = document.getElementById('clock');

clock();
setInterval(clock, 1000);

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours.toString();
    minutes = minutes.toString();
    seconds = seconds.toString();

    hours = hours.length < 2 ? "0" + hours : hours;
    minutes = minutes.length < 2 ? "0" + minutes : minutes;
    seconds = seconds.length < 2 ? "0" + seconds : seconds;

    label.innerHTML = `${hours}:${minutes}:${seconds}`;
}