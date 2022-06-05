import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather(){

    let template = ''
    const weather = ProxyState.weather 
    template += `<div class="col-6">
    <button  class="selectable btn btn-primary" onclick="app.weatherController.convert()" ><h3 class= 'text-white'>Current Boise Temp:</h3> <h1 class= 'text-white'>${((Math.trunc(ProxyState.weather.main.temp-273.15)*1.8)+32)}
    &#8457;</h1></button>
    </div> `
    document.getElementById('weather').innerHTML = template
}



export class WeatherController{
    constructor(){
        ProxyState.on('weather', _drawWeather)
        weatherService.getWeather()
    }
    convert(){
        let template = ''
        
        template += `<div class="col-6">
        <button  class="selectable btn btn-primary" onclick="app.weatherController.revert()" ><h3 class= 'text-white'>Current Boise Temp:</h3> <h1 class= 'text-white'> ${Math.trunc(ProxyState.weather.main.temp-273.15)}&#8451;</h1></button>
        </div> `
        document.getElementById('weather').innerHTML = template

    }

    revert(){
        let template = ''
    
    template += `<div class="col-6">
    <button  class="selectable btn btn-primary" onclick="app.weatherController.convert()" ><h3 class= 'text-white'>Current Boise Temp:</h3> <h1 class= 'text-white'>${((Math.trunc(ProxyState.weather.main.temp-273.15)*1.8)+32)}
    &#8457;</h1></button>
    </div> `
    document.getElementById('weather').innerHTML = template

    }
    
} 