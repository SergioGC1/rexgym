document.addEventListener('DOMContentLoaded', function () {
    try {
        var banner = document.getElementById('cookie-banner');
        var btn = document.getElementById('cookie-accept');
        var btnReject = document.getElementById('cookie-reject');
        if (!banner) return;

        function hideBanner() {
            banner.style.display = 'none';
        }

        var accepted = false;
        try {
            accepted = localStorage.getItem('cookiesAccepted') === '1' || localStorage.getItem('cookiesAccepted') === 'true';
        } catch (e) {
            accepted = false;
        }

        if (accepted) {
            hideBanner();
        } else {
            banner.style.display = 'flex';
        }

        if (btn) {
            btn.addEventListener('click', function () {
                try {
                    localStorage.setItem('cookiesAccepted', '1');
                } catch (e) {
                }
                hideBanner();
            });
        }
        if (btnReject) {
            btnReject.addEventListener('click', function () {
                // No guardar consentimiento; solo ocultar el banner.
                // Si hubiera cookies de terceros, aquí deberíamos eliminarlas.
                hideBanner();
            });
        }
    } catch (err) {
        console.error(err);
    }
});
