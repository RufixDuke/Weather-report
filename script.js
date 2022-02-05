const btn = document.querySelector('.btn');
const inputs = document.getElementById('inputs');
var displaySpace = document.getElementById('display-space')
var speed = document.getElementById('videos');

btn.addEventListener('click', () => {
    var query = inputs.value;
    weatherFetch(query)
})

speed.playbackRate = 0.4;

function weatherFetch(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${query}&appid=de91c982f0db3cc64f7ae493e2a70b93`)
        .then(result => {
            return result.json();
        })
        .then(res => {
            console.log(res)

            displaySpace.innerHTML = '';


            var space = `<div>
                                <h2>Details</h2>
                                <p>Temp: ${res.main.temp}&deg;C</p>
                                <p>Temp Max: ${res.main.temp_max}&deg;C</p>
                                <p>Temp Min: ${res.main.temp_min}&deg;C</p>
                                <p>Humidity: ${res.main.humidity}</p>
                                <p>Pressure: ${res.main.pressure}</p>
                                <p>Wind: ${res.wind.speed}</p>
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