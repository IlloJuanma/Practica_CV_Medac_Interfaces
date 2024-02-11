$(function () {
    localStorage.setItem('modo', 'noche');
    $('.input__check').click(function () {
        let video = $('#video-background');
        let source = video.attr('src');
        let theme = $('#theme');
        if (source === '../img/video_noche.mp4') {
            video.attr('src', '../img/video_dia.mp4');
            theme.attr('href', 'css/dia.css');
            localStorage.setItem('modo', 'dia');
        } else {
            video.attr('src', '../img/video_noche.mp4');
            theme.attr('href', 'css/noche.css');
            localStorage.setItem('modo', 'noche');
        }
    })
})