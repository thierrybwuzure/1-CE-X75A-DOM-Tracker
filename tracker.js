let btn_sun = document.getElementById('btn-sun');
let cnt1 = document.getElementById('sun-value');

let btn_water = document.getElementById('btn-water');
let cnt2 = document.getElementById('water-value');

let btn_break = document.getElementById('btn-break');
let cnt3 = document.getElementById('break-value');

let goal_message = document.getElementById('goal-message');
let cnt4 = document.getElementById('total-value');

btn_sun.addEventListener('click', () => {
    cnt1.innerText = parseInt(cnt1.innerText) + 1;
    cnt4.innerText = parseInt(cnt4.innerText) + 1;
});

btn_water.addEventListener('click', () => {
    cnt2.innerText = parseInt(cnt2.innerText) + 1;
    cnt4.innerText = parseInt(cnt4.innerText) + 1;
});

btn_break.addEventListener('click', () => {
    cnt3.innerText = parseInt(cnt3.innerText) + 1;
    cnt4.innerText = parseInt(cnt4.innerText) + 1;
});

console.log(btn_sun, btn_water, btn_break, goal_message);