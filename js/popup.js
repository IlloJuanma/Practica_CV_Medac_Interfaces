$(document).ready(function () {
    $("#enviarBtn").on("click", function () {
        // Muestra el popup
        $("#popup").fadeIn();

        setTimeout(function () {
            $("#popup").fadeOut();
        }, 2000);
    });
});