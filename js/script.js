//Toggle class active
const navbarNav = document.querySelector 
('.navbar-nav');

// Ketika menu diklik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};