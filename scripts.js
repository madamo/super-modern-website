const searchIcon = document.getElementById("search-icon");
const searchContainer = document.getElementById("search-container");
const closeSearch = document.getElementById("close-search");
const showMenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const featureContainer = document.getElementById("features");
const featureImgBg = document.getElementById("feature-img-column"); // will eventually need to change this


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

document.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 1160) {
        featureImgBg.style.backgroundColor = "green"
    } else {
        featureImgBg.style.backgroundColor = "lightpink"

    }

})

/*featureContainer.addEventListener("scroll", (event) => {
    //alert("scrolling!");
    console.log(featureContainer.scrollTop);
})*/