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

const reviewsPhotos = document.querySelectorAll('.runningLine__item');
const reviewsPhotosDuplicates = document.querySelectorAll('.runningLine__item_duplicated');

function reviewPhotoView (index) {

    caseCount = index;
    const cases = document.querySelectorAll('.reviews-main__item');
    cases[caseCount].scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest'
    });
    updateButtons();
}

function updateButtons() {

    const cases = document.querySelectorAll('.reviews-main__item');

    if (caseCount === 0) {

        btnBack.forEach(btn => {
            btn.classList.remove("_btn_common");
            btn.classList.add("_btn_unactive");
        })
        btnNext.forEach(btn => {
            btn.classList.remove("_btn_unactive");
            btn.classList.add('_btn_common');
        })
    }
    else if (caseCount === cases.length - 1) {

        btnNext.forEach(btn => {
            btn.classList.remove('_btn_common');
            btn.classList.add("_btn_unactive");
        })
        btnBack.forEach(btn => {
            btn.classList.add("_btn_common");
            btn.classList.remove("_btn_unactive");
        })
    }
    else {

        btnNext.forEach(btn => {
            btn.classList.remove("_btn_unactive");
            btn.classList.add('_btn_common');
        })

        btnBack.forEach(btn => {
            btn.classList.remove("_btn_unactive");
            btn.classList.add("_btn_common");
        })
    }
}

reviewsPhotos.forEach((photo, index) => {

    photo.addEventListener("click", () => {

        caseCount = index;
        reviewPhotoView(index);
    });
});

reviewsPhotosDuplicates.forEach((photo, index) => {

    photo.addEventListener("click", () => {

        caseCount = index;
        reviewPhotoView(index);
    });
});