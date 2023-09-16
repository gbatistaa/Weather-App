export const btn = document.getElementById('weather-button');
export const icon = document.getElementById('weather-icon');
export const city = document.getElementById('city-input');
export const description = document.getElementById('weather-description');
export const infos = document.getElementsByClassName('infos');
export const infosData = document.getElementsByClassName('info-data');
export const dataSection = document.getElementsByClassName('data-sec');

city.addEventListener("focus", (e) => {
    e.preventDefault();
    city.style.outlineColor = '#ff9900';
    city.style.outlineStyle = 'solid';
})
city.addEventListener("blur", (e) => {
    city.style.outlineColor = '#2fafcf';
})