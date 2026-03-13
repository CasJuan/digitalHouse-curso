const urlBase= `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = '1a65ef24d863788e6125845fc1bb5ce3';
const deffKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if(city){
        fetchWeather(city)
    }else{
        alert('Ingrese una ciudad valida')
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponse = document.getElementById('responseData');
    divResponse.innerHTML = '';

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const decription = data.weather[0].description
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es de ${Math.floor(temp - deffKelvin)}`

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `La humedad es de: ${humidity}%`

    const icoInfo = document.createElement('img')
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `La descripcion meteorologica es: ${decription}`

    divResponse.appendChild(cityInfo)
    divResponse.appendChild(tempInfo)
    divResponse.appendChild(humidityInfo)
    divResponse.appendChild(icoInfo)
    divResponse.appendChild(descriptionInfo)
}
