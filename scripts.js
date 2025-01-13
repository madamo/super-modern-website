const searchIcon = document.getElementById("search-icon");
const searchContainer = document.getElementById("search-container");
const closeSearch = document.getElementById("close-search");
const showMenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

searchIcon.addEventListener("click", () => {
    searchContainer.style.display = "flex";
});

closeSearch.addEventListener("click", () => {
    searchContainer.style.display = "none";
})

showMenu.addEventListener("click", () => {
    menu.style.left = "0"
})

closeMenu.addEventListener("click", () => {
    menu.style.left = "100%";
    // TO-DO: Make sure this is hidden from screen readers
})