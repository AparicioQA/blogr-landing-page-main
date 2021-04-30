const menus = document.getElementById("menus");
menus.addEventListener("click", (event) => {
    if (event.target.classList.contains("menu-title")) {
        event.target.classList.toggle("clicked");
        event.target.nextElementSibling.classList.toggle("disabled");
    }
});

const amburger = document.getElementById("amburger");

window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
        menus.classList.remove("disabled");
        amburger.classList.add("amburger__buttom");
        amburger.classList.remove("close__buttom");
    } else {
        menus.classList.add("disabled");
    }
});

addEventListener("DOMContentLoaded", () => {
    var mediaqueryList = window.matchMedia("(max-width: 900px)");
    if (mediaqueryList.matches) {
        menus.classList.add("disabled");
    }
});


amburger.addEventListener("click", () => {
    amburger.classList.toggle("close__buttom");
    menus.classList.toggle("disabled");
});