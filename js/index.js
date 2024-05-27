document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item a');
    const currentUrl = window.location.href;

    // Agregar la clase 'active' al elemento de menú 'Inicio' al cargar la página
    menuItems.forEach(item => {
        const linkUrl = item.getAttribute('href');
        //remueve el active si ya existe
        if (item.parentElement.classList.contains('active')) {
            item.parentElement.classList.remove('active');
        }
        if (currentUrl.includes(linkUrl)) {
            item.parentElement.classList.add('active');
        }
    });
});

