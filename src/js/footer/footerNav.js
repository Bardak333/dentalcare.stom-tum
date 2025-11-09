import { scrollToElement} from "../header/nav/headerNav.js";

const servicesNavFooter = document.getElementById('footer_nav-services');
const reviewsNavFooter = document.getElementById('footer_nav-reviews');
const pricesNavFooter = document.getElementById('footer_nav-prices');
const specialistsNavFooter = document.getElementById('footer_nav-specialists');
const faqNavFooter = document.getElementById('footer_nav-faq');
const contactsNavFooter = document.getElementById('footer_nav-contacts');
const mainNavFooter = document.querySelector('.footer__fringe_link');

mainNavFooter.addEventListener('click', () => {

    scrollToElement('.main', 0);
});

servicesNavFooter.addEventListener('click', () => {

    scrollToElement('.help', 100);
})

reviewsNavFooter.addEventListener('click', () => {

    scrollToElement( '.reviews-companies', 150);
});

pricesNavFooter.addEventListener('click', () => {

    scrollToElement( '.calculation', 50);
});

specialistsNavFooter.addEventListener('click', () => {

    scrollToElement( '.reviews', 150);
})

contactsNavFooter.addEventListener('click', () => {

    scrollToElement( '.footer__main', 0);
})

faqNavFooter.addEventListener('click', () => {

    scrollToElement( '.patquest', 50);
})