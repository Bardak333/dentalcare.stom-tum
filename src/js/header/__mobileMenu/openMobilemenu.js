const btnOpenMenu = document.querySelector('.header__menuBtn');

function openMobilemenu () {

    const btnOpenMenu = document.querySelector('.header__menuBtn');
    const mobileMenu = document.querySelector('.header__mobileMenu');
    
    mobileMenu.classList.toggle('header__mobileMenu-active');
    btnOpenMenu.classList.toggle('header__menuBtn-open');

}

btnOpenMenu.addEventListener('click', openMobilemenu);