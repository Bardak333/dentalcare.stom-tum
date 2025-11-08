const openVideoBtn = document.querySelector('.openVideo');

function openVideo() {

    const videoContainer = document.querySelector('.main-item__case_view');
    const videoIcon  = document.querySelector('.openVideo');

    videoContainer.classList.toggle('review_videoActive');
    videoIcon.classList.toggle('closeVideo');
}

openVideoBtn.addEventListener('click', openVideo);