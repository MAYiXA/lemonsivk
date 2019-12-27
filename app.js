const toggleBtn = document.querySelector('.toggle-bars');
const menu = document.querySelector('.menu-expanded');
const menuLink = document.querySelectorAll('.expand-link');

toggleBtn.innerHTML = '<i class="fas fa-bars"></i> <i class="fas fa-times"></i>';
const bars = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-times');
x.style.display = 'none';

toggleMenu = () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
};

iconChange = () => {
    if (bars.style.display === 'none') {
        bars.style.display = 'block';
    } else {
        bars.style.display = 'none';
    }
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

toggleBtn.addEventListener('click', () => {
    toggleMenu();
    iconChange();
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.style.display = 'none';
        iconChange();
    });
});