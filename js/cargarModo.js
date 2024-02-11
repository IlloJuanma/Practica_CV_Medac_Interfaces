$(document).ready(function () {
    const modo = localStorage.getItem('modo');

    if (modo === 'noche') {
        $('#video-background').attr('src', '../img/video_noche.mp4');
        $('#theme').attr('href', 'css/noche.css');
    }
});