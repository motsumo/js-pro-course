const countryInput = document.getElementsByClassName("country")[0];
const buttonFind = document.getElementsByClassName("find")[0];
const buttonMyWeather = document.getElementsByClassName("myWeather")[0];
const buttonClear = document.getElementsByClassName("clear")[0];
const table = document.getElementsByClassName("infoTable")[0];

class weatherClass {
    constructor(country, temp_c, temp_f, text, icon) {
        this.country = country;
        this.temp_c = temp_c;
        this.temp_f = temp_f;
        this.text = text;
        this.icon = icon;
    }
}

window.onload = function () {
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

buttonFind.onclick = function () {
    let country = countryInput.value;
    fetch("http://api.apixu.com/v1/current.json?key=9c2b8bf815f844e48d3174357191005&q=" +
            country).then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            getInfoWeather(weather);
        });
}

buttonMyWeather.onclick = function () {
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

buttonClear.onclick = function () {
    table.innerHTML = "";
}

function getInfoWeather(weather) {
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
            name,
            country
        }
    } = weather;
    let tableHead = document.getElementsByTagName("tr")[0];
    let weatherInfo = new weatherClass(country, temp_c, temp_f, text, icon);
    let tableIsEmpty = tableHead == undefined;
    let head = '<tr> <th>City</th> <th>Country</th> <th>t, C<span>&#176;</span></th> <th>t, F<span>&#176;</span></th> <th>Condition</th> </tr>';
    let row = `<tr class=${name}> <td> ${name} </td><td> ${country} </td><td> ${temp_c} </td><td> ${temp_f} </td><td><img src="http:${icon}"></br> ${text} </td></tr>`;

    if (tableIsEmpty) {
        table.insertAdjacentHTML('beforeend', head);
    }

    let rowClass = document.getElementsByClassName(`${name}`)[0];

    if (rowClass) {
        rowClass.innerHTML = '';
        rowClass.innerHTML = row;
    } else {
        table.insertAdjacentHTML('beforeend', row);
    }

    if (localStorage.getItem(name)) {
        localStorage.removeItem(name);
        localStorage.setItem(name, JSON.stringify(weatherInfo));
    } else {
        localStorage.setItem(name, JSON.stringify(weatherInfo));
    }
}