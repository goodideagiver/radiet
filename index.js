function showMenu() {
    document.getElementById("mob-nav").style.transform = "translate(0,0)";
    document.getElementById("body").style.overflow = "hidden";
}

function hideMenu() {
    document.getElementById("mob-nav").style.transform = "translate(-100%,0)";
    document.getElementById("body").style.overflow = "auto";
}