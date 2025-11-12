import { scrollToElement} from "../header/nav/headerNav.js";

const body = document.querySelector('body');
const backblur3 = document.querySelector('.backblur3');
const popup = document.querySelector('.popupQuiz');
const imageDoctor = document.querySelector('.popupQuiz__doctor');
const btnPopup = document.querySelector('.popupQuiz__btnNext');
const btnPopupClose = document.querySelector('.popupQuiz__btn-close');
let check = false;

btnPopup.addEventListener('click', ()=>{
    body.classList.toggle('no-scroll');
    backblur3.classList.toggle('active');
    popup.classList.toggle('active');
    imageDoctor.classList.toggle('active');
    scrollToElement('.quiz', 0);
})

btnPopupClose.addEventListener('click', ()=>{
    body.classList.toggle('no-scroll');
    backblur3.classList.toggle('active');
    popup.classList.toggle('active');
    imageDoctor.classList.toggle('active');
})


function toggleBackblur3(){
    check = true;
    body.classList.toggle('no-scroll');
    backblur3.classList.toggle('active');
    popup.classList.toggle('active');
    imageDoctor.classList.toggle('active');

}

if (!check){ setTimeout(toggleBackblur3, 60000); }


