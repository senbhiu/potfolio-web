let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navilist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}
const sr = scrollReveal ({
    distance: '40px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text',{delay:300, origin:'left'})