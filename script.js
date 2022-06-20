const btn = document.querySelector('.button');
const body = document.querySelector('body');

function moveOn(){
    btn.classList.toggle('turn-btn')
    body.classList.toggle('light');
}