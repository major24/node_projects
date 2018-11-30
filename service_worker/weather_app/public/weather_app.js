
const main = document.querySelector('main');
const sourceCity = document.querySelector('#source_city');
const sourceCityServerCall = document.querySelector('#source_city_servercall');
const defaultCity = 'Toronto';

window.addEventListener('load', e => {
    console.log('window load');
    updateWeather();
    updateSource();

    // get change event
    sourceCity.addEventListener('change', e => {
        console.log(e.target.value);
        updateWeather(e.target.value);
    });

    // get change event for server side select
    sourceCityServerCall.addEventListener('change', e => {
        console.log(e.target.value);
        updateWeatherServerCall(e.target.value);
    });

    // register service worker..
    registerSW();

    // TEST button
/*    const btn = document.querySelector('#button_test');
    btn.addEventListener('click', e => {
        testButton(e);
    });*/

});

// get city data from db/api and populate select ctrl
async function updateSource() {
    const url = '/data/cities.json';
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    sourceCity.innerHTML = data.map((city) => {
        return `<option value="${city}">${city}</option>`
    });

    // also updte the server control
    sourceCityServerCall.innerHTML = data.map((city) => {
        return `<option value="${city}">${city}</option>`
    })
}

async function updateWeather(city = defaultCity) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a07e0e23837f082abc2e2fc0b1d4bef`;
    //const url = `/weather-aapi?city=${city}`;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    main.innerHTML = createWeatherInfo(data);
}

async function updateWeatherServerCall(city = defaultCity) {
    //const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a07e0e23837f082abc2e2fc0b1d4bef`;
    const url = `/weather-aapi?city=${city}`;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    main.innerHTML = createWeatherInfo(data);
}


function createWeatherInfo(data){
    if (data.name === "") {
        // data not found or offline mode..
        return `
            <div class="weather">
                <h2>${data.mode}</h2>
                <h3>${data.desc}</h3>
            </div>
        `;
    } else {
        return `
            <div class="weather">
                <h2>${data.name}</h2>
                <div class="div-spc">
                    <label class="fld-label">Max:</label>
                    <label class="fld-value">${data.main.temp_max}</label>
                </div>
                <div class="div-spc">
                    <label class="fld-label">Min:</label>
                    <label class="fld-value">${data.main.temp_min}</label>
                </div>
                <div class="div-spc">
                    <label class="fld-label">Wind-Speed</label>
                    <label class="fld-value">${data.wind.speed}</label>
                </div>
                <div class="div-spc">
                    <label class="fld-label">Desc:</label>
                    <label class="fld-value">${data.weather[0].main} - ${data.weather[0].description}</label>
                </div>
            </div>
        `;
    }
}



// service worker related..
function registerSW(){
    if ('serviceWorker' in navigator){
        try{
            navigator.serviceWorker.register('./sw.js');
            console.log('service worker registered..');
        } catch (error) {
            console.log('Error: Failed to register service worker..');
        }
    }
}




// TEST Button
async function testButton(evt) {
    //console.log(evt);
    const url = '/weather-aapi?city=Spain';
    const res = await fetch(url);
    const data = await res.json();
    console.log('---');
    console.log(data);
    main.innerHTML = createWeatherInfo(data);
}
// TEST