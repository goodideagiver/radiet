function showMenu() {
    document.getElementById("mob-nav").style.left = "0";
    document.getElementById("body").style.overflow = "hidden";
}

function hideMenu() {
    document.getElementById("mob-nav").style.left = "-100%";
    document.getElementById("body").style.overflow = "auto";
}