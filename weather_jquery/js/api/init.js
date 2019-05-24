import weatherClass from './weatherClass';

export default function init() {
    for (var i = 0; i < localStorage.length; i++) {
        let name = localStorage.key(i);
        fetch("http://api.apixu.com/v1/current.json?key=9c2b8bf815f844e48d3174357191005&q=" +
                name).then(function (response) {
                return response.json();
            })
            .then(function (weather) {
                const {
                    current: {
                        temp_c,
                        temp_f,
                        condition: {
                            text,
                            icon
                        }
                    },
                    location: {
                        country
                    }
                } = weather;
                let weatherInfo = new weatherClass(country, temp_c, temp_f, text, icon);
                localStorage.removeItem(name);
                localStorage.setItem(name, JSON.stringify(weatherInfo));
            });
    }
}