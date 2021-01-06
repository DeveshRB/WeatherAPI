// Init
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();


// Init Weather
const weather = new Weather(weatherLocation.city);

// Init UI
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)


// Change Location Event
document.getElementById('w-change-btn').addEventListener('click',()=>{
    const city = document.getElementById('city').value;

    // console.log(city);
    // Change Location
    weather.changeLocation(city);

    // Set Location in LS
    storage.setLocationData(city);

    // Call getWeather
    getWeather();

    // closeModal
    $('#locModal').modal('hide');
});



function getWeather(){
    weather.getWeather()
    .then(results => {
        // console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
