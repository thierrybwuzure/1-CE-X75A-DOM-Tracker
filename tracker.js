let btn1 = document.getElementById('btn_count1');
let btn5 = document.getElementById('btn_count5');
let cnt = document.getElementById('val_count');


btn1.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 1;
});

btn5.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 5;
});

console.log(btn1, btn5);