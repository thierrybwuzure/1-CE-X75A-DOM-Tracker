let btn_sun = document.getElementById('btn-sun');
let cnt = document.getElementById('sun-value');

let btn_water = document.getElementById('btn-water');
let cnt1 = document.getElementById('water-value');

let total = document.getElementById('val_total');

btn_sun.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 1;
});

btn_water.addEventListener('click', () => {
    cnt1.innerText = parseInt(cnt1.innerText) + 1;
});

console.log(btn_sun, btn_water);