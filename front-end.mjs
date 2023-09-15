export const btn = document.getElementById('city-input');
export const icon = document.getElementById('weather-icon');
export const city = document.getElementById('city-input');
export const description = document.getElementById('weather-description');
export const infos = document.getElementsByClassName('infos');
export const infosData = document.getElementsByClassName('info-data');

btn.addEventListener("focus", (e) => {
    e.preventDefault();
    btn.style.outlineColor = ' #ff9900';
    btn.style.outlineStyle = 'solid';
})
btn.addEventListener("blur", (e) => {
    btn.style.outlineColor = '#2fafcf';
})
