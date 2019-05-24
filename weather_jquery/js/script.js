import $ from 'jquery';
import {
    getWeatherByLocation,
    getWeatherFromInput,
    init
} from './api';

const buttonFind = $(".find");
const buttonMyWeather = $(".myWeather");
const buttonClear = $(".clear");

window.onload = function () {
    init();
}

buttonFind.click(getWeatherFromInput)

buttonMyWeather.click(getWeatherByLocation)

buttonClear.click(function () {
    table.innerHTML = "";
})