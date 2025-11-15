document.addEventListener('DOMContentLoaded', function () {
    var root = document.documentElement;
    var btn = document.querySelector('.user-btn');

    // Elemento raíz y el botón de usuario (se reutiliza como toggle)
    var raiz = document.documentElement;
    var boton = document.querySelector('.user-btn');

    // Leer la preferencia almacenada en session (0 o 1). Devuelve null si no disponible.
    function obtenerOscuroAlmacenado() {
        try { return sessionStorage.getItem('rexgym_oscuro'); } catch (e) { return null; }
    }

    // Guardar la preferencia en session (recibe '1' o '0')
    function establecerOscuroAlmacenado(valor) {
        try { sessionStorage.setItem('rexgym_oscuro', valor); } catch (e) { }
    }

    // Inicializar: por defecto MODO CLARO (si no hay valor almacenado). Solo activar oscuro si hay '1'.
    var almacenado = obtenerOscuroAlmacenado();
    if (almacenado === '1') {
        raiz.classList.add('dark');
    }

    // Actualiza el estado visual del botón: aria-pressed y emoji sencillo.
    function actualizarBoton() {
        if (!boton) return;
        var oscuro = raiz.classList.contains('dark');
        boton.setAttribute('aria-pressed', oscuro ? 'true' : 'false');
        boton.textContent = oscuro ? '☀️' : '🌙';
    }

    // Ejecutar una vez al inicio
    actualizarBoton();

    // Si el botón existe, togglear la clase y guardar la preferencia
    if (boton) {
        boton.addEventListener('click', function () {
            // Añadir clase temporal para forzar una transición de colores suave
            raiz.classList.add('theme-transition');
            // Forzar reflow para que el navegador registre la clase antes del toggle
            // eslint-disable-next-line no-unused-expressions
            void raiz.offsetWidth;

            var ahoraOscuro = raiz.classList.toggle('dark');
            establecerOscuroAlmacenado(ahoraOscuro ? '1' : '0');
            actualizarBoton();

            // Quitar la clase de transición tras 400ms
            window.setTimeout(function () {
                raiz.classList.remove('theme-transition');
            }, 400);
        });
    }

});
