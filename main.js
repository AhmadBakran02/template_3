
let btn = document.getElementById("sh")
let so = document.getElementById("social");
so.style.display = "none";

btn.onclick = function () {

    if (so.style.display === "none") {
        so.style.display = "flex";
    }
    else {
        so.style.display = "none";
    }
}
