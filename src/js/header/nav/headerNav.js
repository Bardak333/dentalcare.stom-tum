const servicesNav = document.getElementById('header_nav-services');
const reviewsNav = document.getElementById('header_nav-reviews');
const pricesNav = document.getElementById('header_nav-prices');
const specialistsNav = document.getElementById('header_nav-specialists');
const faqNav = document.getElementById('header_nav-faq');
const contactsNav = document.getElementById('header_nav-contacts');
const mainNav = document.querySelector('.header__address_logo');

export function scrollToElement(className, offset = 0) {

    const element = document.querySelector(className);
    const elementRect = element.getBoundingClientRect();
    const elementAbsoluteTop = window.pageYOffset + elementRect.top;

    const targetPosition = elementAbsoluteTop - offset;

    window.scrollTo({

        top: Math.max(0, targetPosition),
        behavior: 'smooth'
    });
}

mainNav.addEventListener('click', () => {

    scrollToElement('.main', 0);
});

servicesNav.addEventListener('click', () => {

    scrollToElement( '.help', 100);
});

reviewsNav.addEventListener('click', () => {

    scrollToElement( '.reviews-companies', 150);
});

pricesNav.addEventListener('click', () => {

    scrollToElement( '.calculation', 50);
});

specialistsNav.addEventListener('click', () => {

    scrollToElement( '.reviews', 150);
})

contactsNav.addEventListener('click', () => {

    scrollToElement( '.footer__main', 0);
})

faqNav.addEventListener('click', () => {

    scrollToElement( '.patquest', 50);
})



