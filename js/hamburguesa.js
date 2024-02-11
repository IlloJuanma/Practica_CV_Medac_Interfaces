document.addEventListener("DOMContentLoaded", function(){
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", function(){
        nav.classList.add("nav-visible");
    })
    cerrar.addEventListener("click", function(){
        nav.classList.remove("nav-visible");
    });
})