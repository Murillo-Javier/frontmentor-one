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

