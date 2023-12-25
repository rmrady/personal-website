AOS.init();

let x = document.getElementsByTagName('main')[0]
let count_scroll = 0;
x.addEventListener('scroll', (e) => {
    count_scroll = (Math.round(e.target.scrollTop));
    console.log(count_scroll);
})