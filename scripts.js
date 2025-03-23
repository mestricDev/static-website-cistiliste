document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.innerText = 'Menu';
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-controls', 'nav-list');
    navToggle.addEventListener('click', function() {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('open');
    });
    nav.insertBefore(navToggle, nav.firstChild);

    // Enhance user experience
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('focus', function() {
            link.classList.add('focused');
        });
        link.addEventListener('blur', function() {
            link.classList.remove('focused');
        });
    });
});
