const openVideoBtn = document.querySelectorAll('.openVideo');

function openVideo(index) {

    const videoContainer = document.querySelectorAll('.main-item__case_view');
    const videoIcon  = document.querySelectorAll('.openVideo');

    videoContainer[index].classList.toggle('review_videoActive');
    videoIcon[index].classList.toggle('closeVideo');
}

// openVideoBtn.addEventListener('click', openVideo);

openVideoBtn.forEach((btn, index) => {

    btn.addEventListener('click', () => {

        openVideo(index);
    })
})