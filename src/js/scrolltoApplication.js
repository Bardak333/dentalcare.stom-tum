const mainBtn = document.querySelector('.main__applicationBtn');
const mainBtn2 = document.querySelector('.widget2__sale_btn');
const calculationBtns = document.querySelectorAll('.calculation-item__btn');
const stepBtn = document.querySelector('.steps__widget--btn');
const stepBtn2 = document.querySelector('.steps__widget--btn2');
const faqBtn = document.querySelector('.faq__btn');

function scrollToApplication() {

    const application = document.querySelector('.request');
    const viewportHeight = window.innerHeight;
    const elementRect = application.getBoundingClientRect();
    const elementAbsoluteTop = window.pageYOffset + elementRect.top;
    const elementHeight = elementRect.height;

    const targetScroll = elementAbsoluteTop - (viewportHeight / 2) + (elementHeight / 2) ;

    window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
    });
}

mainBtn.addEventListener('click', scrollToApplication);
mainBtn2.addEventListener('click', scrollToApplication);
calculationBtns.forEach(btn => btn.addEventListener('click', scrollToApplication));
stepBtn.addEventListener('click', scrollToApplication);
stepBtn2.addEventListener('click', scrollToApplication);
faqBtn.addEventListener('click', scrollToApplication);