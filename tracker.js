let btn_sun = document.getElementById('btn-sun');
let cnt = document.getElementById('sun-value');
let btn5 = document.getElementById('btn_count5');
let total = document.getElementById('val_total');

btn_sun.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 1;
});

// btn.addEventListener('click', () => {
//     cnt.innerText = parseInt(cnt.innerText) + 5;
// });

console.log(btn_sun);