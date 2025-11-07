const btnBack = document.querySelectorAll('.reviews-main__nav_btnBack');
const btnNext = document.querySelectorAll('.reviews-main__nav_btnNext');
let caseCount = 0;

function scrollNext () {

    const cases = document.querySelectorAll('.reviews-main__item');
    const btnBack = document.querySelectorAll('.reviews-main__nav_btnBack');
    const btnNext = document.querySelectorAll('.reviews-main__nav_btnNext');

    if (caseCount === cases.length - 2) {

        caseCount++;
        console.log(caseCount);
        btnNext.forEach(btn => {
            btn.classList.remove('_btn_common');
            btn.classList.add("_btn_unactive");
        })
        cases[caseCount].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });

    }
    else {
        caseCount++;
        console.log(caseCount);
        btnBack.forEach(btn => {
            btn.classList.remove("_btn_unactive");
            btn.classList.add("_btn_common");
        })
        cases[caseCount].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });
    }
}

function scrollBack () {

    const cases = document.querySelectorAll('.reviews-main__item');
    const btnBack = document.querySelectorAll('.reviews-main__nav_btnBack');
    const btnNext = document.querySelectorAll('.reviews-main__nav_btnNext');

    if (caseCount === 1) {

        caseCount--;
        console.log(caseCount);
        btnBack.forEach(btn => {
            btn.classList.remove("_btn_common");
            btn.classList.add("_btn_unactive");
        })
        cases[caseCount].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });

    }
    else {
        caseCount--;
        console.log(caseCount);
        btnBack.forEach(btn => {
            btn.classList.remove("_btn_unactive");
            btn.classList.add("_btn_common");
        })
        btnNext.forEach(btn => {
            btn.classList.remove("_btn_unactive");
            btn.classList.add("_btn_common");
        })
        cases[caseCount].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });
    }
}

btnNext.forEach(btn => {

    btn.addEventListener("click", scrollNext);
})

btnBack.forEach(btn => {

    btn.addEventListener("click", scrollBack);
})