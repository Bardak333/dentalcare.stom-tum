const servicesNavMobile = document.getElementById('mobile_nav-services');
const reviewsNavMobile = document.getElementById('mobile_nav-reviews');
const pricesNavMobile = document.getElementById('mobile_nav-prices');
const specialistsNavMobile = document.getElementById('mobile_nav-specialists');
const faqNavMobile = document.getElementById('mobile_nav-faq');
const contactsNavMobile = document.getElementById('mobile_nav-contacts');

import { scrollToElement } from '/src/js/header/nav/headerNav.js';
import { openMobileMenu } from "./openMobilemenu.js";

servicesNavMobile.addEventListener('click', () => {

    scrollToElement('.help', 0);
    openMobileMenu();
})

reviewsNavMobile.addEventListener('click', () => {

    scrollToElement('.reviews-companies', 80);
    openMobileMenu();
})

pricesNavMobile.addEventListener('click', () => {

    scrollToElement('.calculation', 0);
    openMobileMenu();
})

specialistsNavMobile.addEventListener('click', () => {

    scrollToElement('.reviews', 80);
    openMobileMenu();
})

faqNavMobile.addEventListener('click', () => {

    scrollToElement('.patquest', 0);
    openMobileMenu();
})

contactsNavMobile.addEventListener('click', () => {

    scrollToElement('.footer__main', 0);
    openMobileMenu();
})

