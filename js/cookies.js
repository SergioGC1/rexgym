document.addEventListener('DOMContentLoaded', function () {
    try {
        var banner = document.getElementById('cookie-banner');
        var btn = document.getElementById('cookie-accept');
        if (!banner) return; // nothing to do if markup not present

        function hideBanner() {
            banner.style.display = 'none';
        }

        // Check localStorage first
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
                    // ignore storage errors
                }
                hideBanner();
            });
        }
    } catch (err) {
        // fail silently
        console.error(err);
    }
});
