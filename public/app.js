const toggle = document.querySelector('.toggle-bars');
const menuExpanded = document.querySelector('.menu-expanded');

toggle.innerHTML = '<i class="fas fa-bars"></i>';

toggle.addEventListener('click', () => {
    if (menuExpanded === true) {
        menuExpanded.classList.add('menu-expanded');
    } else {
        menuExpanded.classList.remove('menu-expanded');
    }
})