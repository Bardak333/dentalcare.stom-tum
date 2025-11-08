export function toggleBackblur(
    messageText='Мы получили вашу заявку и позвоним в течении 15 минут, чтобы уточнить детали'
){
    const backblur = document.querySelectorAll(".backblur")[0];
    const body = document.querySelector("body");
    const message = document.querySelector(".message");
    message.querySelector("p").innerHTML = messageText;

    backblur.classList.toggle("active");
    body.classList.toggle("no-scroll");
    message.classList.toggle("active");
}

const btnAnswer = document.querySelector(".message__btn_answer");
const btnClose = document.querySelector(".message__btn-close");

btnAnswer.addEventListener('click', toggleBackblur)
btnClose.addEventListener('click', toggleBackblur)


