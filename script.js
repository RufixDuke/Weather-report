const btn = document.querySelector('.btn');
const inputs = document.getElementById('inputs');
var displaySpace = document.getElementById('output')
// var speed = document.getElementById('videos');

btn.addEventListener('click', () => {
    var query = inputs.value;
    weatherFetch(query)
})

// speed.playbackRate = 0.4;

function weatherFetch(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=de91c982f0db3cc64f7ae493e2a70b93`)
        .then(result => {
            return result.json();
        })
        .then(res => {
            console.log(res)
            if (res.cod == 404) {
                alert(res.message)
            } else {

                let c = res.main.temp.toFixed(0);

                displaySpace.style.display = "block";
                displaySpace.innerHTML = `
                                        <div id="location">
                                        <i class="fas fa-map-marker-alt"></i>
                                            ${res.name}
                                        </div> 
                                            <div id = "res">
                                                <img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="weather icon"/> 
                                                <div id = "data">
                                                    <div id="upper">
                                                        <h1>${c}</h1>
                                                        <p>°C</p>
                                                    </div> 
                                                    <div id = "lower">
                                                        <p>${res.weather[0].description}</p> 
                                                    </div> 
                                                </div> 
                                            </div>
                
                                            <div class="info">
                                                <p><i class="fas fa-tint"></i> Humidity: ${res.main.humidity}%</p>
                                                <p> <i class="fas fa-arrow-up"></i> <i class="fas fa-arrow-down"></i>
                                                Pressure:  ${res.main.pressure} in</p>
                                                <p> <i class="fas fa-wind"></i> Wind: ${res.wind.speed} mph</p>
                                                <p> <i class="fas fa-eye"></i> Visibility: ${res.visibility}</p>
                                            </div>
                                            `
            }

        })
        .catch(error => {
            console.log(error)
        })
}

// function dailyFetch(query) {
//     fetch(`pro.openweathermap.org/data/2.5/forecast/hourly?q=${query},DE&appid=de91c982f0db3cc64f7ae493e2a70b93`)
//         .then(result => {
//             return result.json();
//         })
//         .then(res => {
//             console.log(res)
//             if (res.cod == 404) {
//                 alert(res.message)
//             } else {
                
//             }
//         })
// }