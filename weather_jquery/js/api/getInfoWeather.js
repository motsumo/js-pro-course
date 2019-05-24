import $ from 'jquery';
import weatherClass from './weatherClass';
const table = $(".infoTable");

export default function getInfoWeather(weather) {
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
    let tableHead = $("tr")[0];
    let weatherInfo = new weatherClass(country, temp_c, temp_f, text, icon);
    let tableIsEmpty = tableHead === undefined;
    let head = '<tr> <th>City</th> <th>Country</th> <th>t, C<span>&#176;</span></th> <th>t, F<span>&#176;</span></th> <th>Condition</th> </tr>';
    let row = `<tr class=${name}> <td> ${name} </td><td> ${country} </td><td> ${temp_c} </td><td> ${temp_f} </td><td><img src="http:${icon}"></br> ${text} </td></tr>`;

    if (tableIsEmpty) {
        $(head).appendTo(table);
    }

    let rowClass = $(`.${name}`)[0];

    if (rowClass) {
        rowClass.innerHTML = '';
        rowClass.innerHTML = row;
    } else {
        $(row).appendTo(table);
    }

    if (localStorage.getItem(name)) {
        localStorage.removeItem(name);
        localStorage.setItem(name, JSON.stringify(weatherInfo));
    } else {
        localStorage.setItem(name, JSON.stringify(weatherInfo));
    }
}