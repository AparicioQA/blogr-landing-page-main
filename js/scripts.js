const menus = document.getElementById("menus");
menus.addEventListener("click", (event) => {
    if (event.target.classList.contains("menu-title")) {
        event.target.classList.toggle("clicked");
        event.target.nextElementSibling.classList.toggle("disabled");
    }
});

const amburger = document.getElementById("amburger");
// amburger.addEventListener("click", () => {
//     if (amburger.classList.contains("amburger__buttom")) {
//         amburger.classList.replace("amburger__buttom", "close__buttom");
//         menus.classList.remove("disabled");
//         console.log("ambur");
//     } else if (amburger.classList.contains("close__buttom")) {
//         amburger.classList.replace("close__buttom", "amburger__buttom");
//         menus.classList.add("disabled");

//         console.log("close");
//     }
// });

// amburger.addEventListener("click", () => {
//     if (amburger.classList.toggle("close__buttom")) {
//         menus.classList.remove("disabled");
//         console.log("close");
//     } else {
//         menus.classList.add("disabled");
//         console.log("COÑO");
//     }
// });

window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 900) {
        menus.classList.remove("disabled");
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