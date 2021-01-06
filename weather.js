class Weather {
    constructor(city) {
        this.apiKey = 'eee7614903d1841d252cb9d4a051b1cf';
        this.city = city;
    }

    // Fetch weather from api
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`)

        const responseData = await response.json();

        return responseData;
    }

    // Change Weather Location
    changeLocation(city){
        this.city = city;
    }
}

