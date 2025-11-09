const btnOpenMenu = document.querySelector('.header__menuBtn');

export function openMobileMenu () {

    const btnOpenMenu = document.querySelector('.header__menuBtn');
    const mobileMenu = document.querySelector('.header__mobileMenu');
    const body = document.querySelector("body");
    
    mobileMenu.classList.toggle('header__mobileMenu-active');
    btnOpenMenu.classList.toggle('header__menuBtn-open');
    body.classList.toggle('no-scroll');
}

btnOpenMenu.addEventListener('click', openMobileMenu);