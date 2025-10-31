const menuItems = document.querySelectorAll('.tiene-submenu');

menuItems.forEach(item => {
    const menuLink = item.querySelector('.menu-link');
    const submenu = item.querySelector('.submenu');
    
    menuLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        menuItems.forEach(otroItem => {
            if (otroItem !== item) {
                otroItem.classList.remove('activo');
            }
        });
        
        item.classList.toggle('activo');
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.menu')) {
        menuItems.forEach(item => {
            item.classList.remove('activo');
        });
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        menuItems.forEach(item => {
            item.classList.remove('activo');
        });
    }
});