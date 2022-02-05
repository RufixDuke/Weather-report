const btn = document.querySelector('.btn');
const inputs = document.getElementById('inputs');
var displaySpace = document.getElementById('display-space')


btn.addEventListener('click', () => {
    var query = inputs.value;
    weatherFetch(query)
})

function weatherFetch(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${query}&appid=de91c982f0db3cc64f7ae493e2a70b93`)
        .then(result => {
            return result.json();
        })
        .then(res => {
            console.log(res.main)

            displaySpace.innerHTML = '';


            var space = `<div>
                                <h2>Details</h2>
                                <p>Temp: ${res.main.temp}</p>
                                <p>Temp Max: ${res.main.temp_max}</p>
                                <p>Temp Min: ${res.main.temp_min}</p>
                                <p>Humidity: ${res.main.humidity}</p>
                                <p>Pressure: ${res.main.pressure}</p>
                                <p>Wind: ${res.wind.speed}</p>
                                <p>Weather: ${res.weather.main}</p>
                            </div>`;


            var text = document.createElement("div");
            text.innerHTML = space;
            displaySpace.appendChild(text);


        })
        .catch(error => {
            console.log(error)
        })
}
//weatherFetch(2172797)