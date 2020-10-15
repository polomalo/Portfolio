import $ from 'jquery';

let leftParalax = document.querySelector('.cv__left--leftParal');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    leftParalax.style.transform = 'translate(-' + x * 1.5 + 'vw, -' + y * 1.5 + 'vw)';
});
let rightParalax = document.querySelector('.cv__left--rightParal');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    rightParalax.style.transform = 'translate(+' + x * 1 + 'vw, +' + y * 2 + 'vw)';
});
