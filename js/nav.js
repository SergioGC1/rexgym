document.addEventListener('DOMContentLoaded', function () {
    const botonToggle = document.querySelector('.nav-toggle');
    const barraHeader = document.querySelector('.header-bar');
    if (!botonToggle || !barraHeader) return;

    botonToggle.addEventListener('click', function () {
        const abierto = barraHeader.classList.toggle('open');
        botonToggle.setAttribute('aria-expanded', String(abierto));
        botonToggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });

    const enlacesNav = barraHeader.querySelectorAll('nav a');
    enlacesNav.forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            if (barraHeader.classList.contains('open')) {
                barraHeader.classList.remove('open');
                botonToggle.setAttribute('aria-expanded', 'false');
                botonToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && barraHeader.classList.contains('open')) {
            barraHeader.classList.remove('open');
            botonToggle.setAttribute('aria-expanded', 'false');
            botonToggle.setAttribute('aria-label', 'Abrir menú');
            botonToggle.focus();
        }
    });
});
