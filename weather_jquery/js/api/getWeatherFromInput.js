import $ from 'jquery';
import getInfoWeather from './getInfoWeather';

export default function getWeatherFromInput () {    
    let country = $(".country").val();
    fetch("http://api.apixu.com/v1/current.json?key=9c2b8bf815f844e48d3174357191005&q=" +
            country).then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            getInfoWeather(weather);
        });
}