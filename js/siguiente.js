$(document).ready(function () {
    $("#btnNextPage").on("click", function (event) {
        event.preventDefault();

        $("#page-container").addClass("fade-out");

        var nextPageUrl = $(this).attr("href");

        setTimeout(function () {
            // Redirige a la nueva página
            window.location.href = nextPageUrl;
        }, 100);
    });
});
