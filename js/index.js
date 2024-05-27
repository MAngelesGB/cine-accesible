document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item a');
    const currentUrl = window.location.href;

    // Quitar la clase 'active' de todos los elementos del menú
    menuItems.forEach(menuItem => {
        menuItem.parentElement.classList.remove('active');
    });

    // Agregar la clase 'active' al elemento de menú 'Inicio' si la página actual es 'index.html'
    if (currentUrl.includes('index') || currentUrl.endsWith('/')) {
        const homeMenuItem = document.querySelector('.menu-item a[href="index.html"]');
        if (homeMenuItem) {
            homeMenuItem.parentElement.classList.add('active');
        }
    } else {
        // Agregar la clase 'active' al elemento de menú cuyo enlace coincide con la URL actual
        menuItems.forEach(item => {
            const linkUrl = item.getAttribute('href');
            if (currentUrl.includes(linkUrl)) {
                item.parentElement.classList.add('active');
            }
        });
    }
});


