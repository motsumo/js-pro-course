import getInfoWeather from './getInfoWeather';

export default function getWeatherByLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        const {
            latitude,
            longitude
        } = position.coords;
        fetch("http://api.apixu.com/v1/current.json?key=9c2b8bf815f844e48d3174357191005&q=" + latitude + "," +
                longitude)
            .then(function (response) {
                return response.json();
            })
            .then(function (weather) {
                getInfoWeather(weather);
            });
    });

}