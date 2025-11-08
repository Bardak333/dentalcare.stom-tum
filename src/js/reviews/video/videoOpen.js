const openVideoBtn = document.querySelector('.openVideo');

function openVideo() {

    const videoContainer = document.querySelector('.main-item__case_view');
    videoContainer.classList.toggle('review_videoActive');
}

openVideoBtn.addEventListener('click', openVideo);