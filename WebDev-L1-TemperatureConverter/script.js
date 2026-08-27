
function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "celsius") {
        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    } else if (unit === "fahrenheit") {
        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    } else if (unit === "kelvin") {
        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    result.innerHTML =
        `Celsius: ${celsius.toFixed(2)} °C<br>
         Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
         Kelvin: ${kelvin.toFixed(2)} K`;
}

function clearFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("unit").value = "celsius";
    document.getElementById("result").textContent =
        "Result will appear here";
}