// nav.js — loads shared page fragments so they are written only once.
function load(file, target) {
    return fetch(file)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Could not load ${file}`);
            }
            return response.text();
        })
        .then((html) => {
            document.getElementById(target).innerHTML = html;
        });
}

function markCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navigationLinks = document.querySelectorAll('#site-header .links a');
    for (const link of navigationLinks) {
        if (link.getAttribute('href') === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    }
}

load('nav.html', 'site-header').then(markCurrentPage).catch((error) => console.error(error));
load('footer.html', 'site-footer').catch((error) => console.error(error));
