$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        margin: 50,
    });
  });

  // VIDEO //
const videoBtnPlay = document.querySelector('#video-btn-play')
const videoBtnPause = document.querySelector('#video-btn-pause')
const videoObject = document.querySelector('#video-file')
const maineBtn = document.querySelector('#maine-btn')
const videoOverlay = document.querySelector('.video__overlay')
videoObject.controls = true



videoBtnPause.addEventListener('click', function(){
    if (videoObject.play){
        videoObject.pause()
        videoBtnPlay.style.display = 'block'
        videoBtnPause.style.display = 'none'
    } else {
        videoObject.play()
        videoBtnPlay.style.display = 'none'
        videoBtnPause.style.display = 'block'
    }
})
videoBtnPlay.addEventListener('click', function(){
    if (videoObject.paused){
        
        videoOverlay.style.display = 'none'
        videoObject.play()
        videoBtnPlay.style.display = 'none'
        videoBtnPause.style.display = 'block'
    } else {
        videoObject.pause()
        videoBtnPlay.style.display = 'block'
        videoBtnPause.style.display = 'none'
    }
})

