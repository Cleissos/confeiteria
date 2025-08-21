const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
const menuIcon = document.getElementById('menuIcon');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
        menuIcon.src = 'img/x (3).png';
        menuIcon.alt = 'Fechar Menu';
    } else {
        menuIcon.src = 'img/menu-hamburguer.png';
        menuIcon.alt = 'Menu';
    }
});

