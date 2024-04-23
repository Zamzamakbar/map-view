// script js navbar//

function toggleNavbarShadow() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

window.addEventListener('scroll', toggleNavbarShadow);

// script js hero section//

// script js fitur//

// script js cta//
