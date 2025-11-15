document.addEventListener('DOMContentLoaded', function () {
    var root = document.documentElement;
    var btn = document.querySelector('.user-btn');

    var raiz = document.documentElement;
    var boton = document.querySelector('.user-btn');

    function obtenerOscuroAlmacenado() {
        try { return sessionStorage.getItem('rexgym_oscuro'); } catch (e) { return null; }
    }

    function establecerOscuroAlmacenado(valor) {
        try { sessionStorage.setItem('rexgym_oscuro', valor); } catch (e) { }
    }

    var almacenado = obtenerOscuroAlmacenado();
    if (almacenado === '1') {
        raiz.classList.add('dark');
    }

    function actualizarBoton() {
        if (!boton) return;
        var oscuro = raiz.classList.contains('dark');
        boton.setAttribute('aria-pressed', oscuro ? 'true' : 'false');
        boton.textContent = oscuro ? '☀️' : '🌙';
    }

    actualizarBoton();

    if (boton) {
        boton.addEventListener('click', function () {
            raiz.classList.add('theme-transition');
            void raiz.offsetWidth;

            var ahoraOscuro = raiz.classList.toggle('dark');
            establecerOscuroAlmacenado(ahoraOscuro ? '1' : '0');
            actualizarBoton();

            window.setTimeout(function () {
                raiz.classList.remove('theme-transition');
            }, 400);
        });
    }

});
