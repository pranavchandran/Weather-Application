class Weather{
    constructor(city,country){
        this.apiKey = '91888332c6a2f688cea22e58babdb8de'
        this.city = city;
        this.country = country;
    }

    // fetch weather from api
    async getWeather(){
        const response = await fetch(            `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

        // const response = await fetch(`api.openweathermap.org/data/2.5/forecast?q=kochi,Kerala,IN&appid=91888332c6a2f688cea22e58babdb8de`);

        const responseData = await response.json()

        // console.log(responseData);

        return responseData

    }
    // change location
    changeLocation(city,country){
        this.city=city
        this.country=country
    }

}
