let doctorCount = 0
const btnNext = document.querySelector(".reviews-doctors_btnNext");
const btnBack = document.querySelector(".reviews-doctors_btnBack");

function doctorScrollNext() {

    const doctorsItems = document.querySelectorAll(".reviews-doctors__card");
    const btnNext = document.querySelector(".reviews-doctors_btnNext");
    const btnBack = document.querySelector(".reviews-doctors_btnBack");

    if (doctorCount === doctorsItems.length - 2) {

        doctorCount++;
        console.log(doctorCount);
        console.log("Меняем кнопку Next на неактивную");
        btnNext.classList.remove("_btn_common");
        btnNext.classList.add("_btn_unactive");
        doctorsItems[doctorCount].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });

    }
    else {
        console.log("Меняем кнопку Back на активную");
        btnBack.classList.remove("_btn_unactive");
        btnBack.classList.add("_btn_common");
        doctorCount++;
        console.log(doctorCount);
        doctorsItems[doctorCount].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });
    }

}

function doctorScrollBack() {

    const doctorsItems = document.querySelectorAll(".reviews-doctors__card");
    const btnNext = document.querySelector(".reviews-doctors_btnNext");
    const btnBack = document.querySelector(".reviews-doctors_btnBack");

    if (doctorCount === 1) {

        doctorCount--;
        console.log(doctorCount);
        console.log("Меняем кнопку Back на неактивную");
        btnBack.classList.remove("_btn_common");
        btnBack.classList.add("_btn_unactive");
        doctorsItems[doctorCount].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });
    }
    else {
        console.log("Меняем кнопку Next на активную");
        btnNext.classList.remove("_btn_unactive");
        btnNext.classList.add("_btn_common");
        doctorCount--;
        console.log(doctorCount);
        doctorsItems[doctorCount].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });
    }
}

btnNext.addEventListener("click", doctorScrollNext);
btnBack.addEventListener("click", doctorScrollBack);