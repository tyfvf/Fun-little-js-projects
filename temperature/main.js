document.getElementById('button').onclick = function () {
    const temp = document.getElementById('temp').value;
    const celsius = document.getElementById('celsius').checked;
    const fahrenheit = document.getElementById('fahrenheit').checked;
    const kelvin = document.getElementById('kelvin').checked;

    if(celsius){
        const temps = Celsius(Number(temp));
        const tempFahrenheit = temps[0];
        const tempKelvin = temps[1];

        document.getElementById('result').innerHTML = `${temp}°C equals to ${tempFahrenheit.toFixed(1)}°F and ${tempKelvin}K.`;
    }else if(fahrenheit) {
        const temps = Fahrenheit(Number(temp));
        const tempCelsius = temps[0];
        const tempKelvin = temps[1];

        document.getElementById('result').innerHTML = `${temp}°F equals to ${tempCelsius.toFixed(2)}°C and ${tempKelvin.toFixed(3)}K.`;
    }else if(kelvin) {
        const temps = Kelvin(Number(temp));
        const tempCelsius = temps[0];
        const tempFahrenheit = temps[1];

        document.getElementById('result').innerHTML = `${temp}K equals to ${tempCelsius}°C and ${tempFahrenheit.toFixed(2)}°F.`;
    }else {
        document.getElementById('result').innerHTML = 'Please select the scale of your temperature.';
    }
};

function Celsius(temp) {
    const fahrenheit = (temp * (9/5)) + 32;
    const kelvin = temp + 273.15;
    const temps = [fahrenheit, kelvin];

    return temps;
};

function Fahrenheit(temp) {
    const celsius = (temp - 32) * (5/9);
    const kelvin = ((temp - 32) * (5/9)) + 273.15;
    const temps = [celsius, kelvin];

    return temps;
};

function Kelvin(temp) {
    const celsius = temp - 273.15;
    const fahrenheit = ((temp - 273.15) * (9/5)) + 32;
    const temps = [celsius, fahrenheit];

    return temps;
};