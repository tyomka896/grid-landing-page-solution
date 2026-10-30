import "./style.css";

const menuButton = document.querySelector("#menu-button")!;
const menuNav = document.querySelector("#menu-nav")!;
const menuBackdrop = document.querySelector("#menu-backdrop")!;

function toggleMenu() {
    const isOpen = menuNav.classList.toggle("is-open");
    menuButton.classList.toggle("is-open", isOpen);
}

menuButton.addEventListener("click", toggleMenu);
menuBackdrop.addEventListener("click", toggleMenu);
