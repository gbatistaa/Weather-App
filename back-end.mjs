import { btn, icon, city, description, infos, infosData } from "./front-end.mjs";

// Inicialização das requisições http:

const geo = new XMLHttpRequest();
const weather = new XMLHttpRequest();
geo.responseType = 'json';
weather.responseType = 'json';

// Defincição da função que realiza a requsição http:

function weatherRequest (e) {
    if (e.type === "click" || (e.type === "keyup" && e.key === "Enter")) {

        const cityValue = city.value;
    
        geo.onload = () => {
            if(geo.status < 300) {
                const respGeo = geo.response[0];
                weather.open("GET", `https://api.openweathermap.org/data/2.5/weather?lat=${respGeo.lat}&lon=${respGeo.lon}&appid=a5c989eb2a92a83339899d6a9fc8c0f5`)
                weather.send() 
            } else {
                throw new Error(`Request Failed, error ${geo.status}`)
            };
        };
        
        geo.open("GET", `http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&appid=a5c989eb2a92a83339899d6a9fc8c0f5`);
        geo.send();
        
        weather.onload = () => {
            if (weather.status < 300) {
                let index = 0;
                const respWeather = weather.response;
                console.log(respWeather);
                console.log(infos);
                const main = respWeather.main;
                const data = [main.temp, main.feels_like, main.humidity, main.pressure];
                for (const span in infosData) {
                    if (typeof infosData[span] == "object" && index < 4) {
                        if (index < 2) infosData[span].innerHTML = `${(data[index] - 273).toFixed(1)} ºC`;
                        else if (index === 2) infosData[span].innerHTML = `${data[index].toFixed(1)} %`;
                        else infosData[span].innerHTML = `${data[index]} mmHg`;
                        index += 1
                    };
                };
                description.innerHTML = respWeather.weather[0].description;
                const figure = respWeather.weather[0].icon;
                icon.src = `https://openweathermap.org/img/wn/${figure}@2x.png`;
            } else {
                throw new Error(`Request Failed, error ${weather.status}`);
            };
        };
    }
};

btn.addEventListener("click", weatherRequest)
window.addEventListener("keyup", weatherRequest);