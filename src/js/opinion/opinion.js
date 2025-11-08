export function toggleBackblurOpinion(){
    const backblur = document.querySelectorAll(".backblur")[1];
    const body = document.querySelector("body");
    const opinion = document.querySelector(".opinion");

    backblur.classList.toggle("active");
    body.classList.toggle("no-scroll");
    opinion.classList.toggle("active");
}

const btnClose = document.querySelector(".opinion__btn-close");
const sertificate = document.querySelector(".help__certificate_item");

btnClose.addEventListener('click', toggleBackblurOpinion);
sertificate.addEventListener('click', toggleBackblurOpinion)

