let btn_sun = document.getElementById('btn-sun');
let cnt1 = document.getElementById('sun-value');

let btn_water = document.getElementById('btn-water');
let cnt2 = document.getElementById('water-value');

let btn_break = document.getElementById('btn-break');
let cnt3 = document.getElementById('break-value');

let btn_reset = document.getElementById('btn-reset');
let cnt4 = document.getElementById('total-value');

btn_sun.addEventListener('click', () => {

    if (parseInt(cnt1.innerText) < 10) {
        cnt1.innerText = parseInt(cnt1.innerText) + 1;
        cnt4.innerText = parseInt(cnt4.innerText) + 1;
    }
    else {
        btn_sun.disabled = true;
    }
});

btn_water.addEventListener('click', () => {

    if (parseInt(cnt2.innerText) < 14) {
        cnt2.innerText = parseInt(cnt2.innerText) + 1;
        cnt4.innerText = parseInt(cnt4.innerText) + 1;
    }

    else {
        btn_water.disabled = true;
    };
})

btn_break.addEventListener('click', () => {

    if (parseInt(cnt3.innerText) < 16) {
        cnt3.innerText = parseInt(cnt3.innerText) + 1;
        cnt4.innerText = parseInt(cnt4.innerText) + 1;
    }
    else {
        btn_break.disabled = true;
    }
});

btn_reset.addEventListener('click', () => {
    cnt1.innerText = 0;
    cnt2.innerText = 0;
    cnt3.innerText = 0;
    cnt4.innerText = 0;
})

console.log(btn_sun, btn_water, btn_break, btn_reset);