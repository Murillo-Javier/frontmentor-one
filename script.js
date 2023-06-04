const features = document.getElementById("down-features");
const list = document.getElementsByClassName("list")[0];

list.style.display = "none";

features.addEventListener("click", (event) => {
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
});

const company = document.getElementById("down-company");

company.addEventListener("click", (event) => {
    let element = event.target.childNodes[3]
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
});

const hamburger = document.getElementById("menu-hamburger");
const menu = document.getElementById("navbar-menu");

hamburger.addEventListener("click", (event) => {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});