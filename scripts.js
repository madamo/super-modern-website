const searchIcon = document.getElementById("search-icon");
const searchContainer = document.getElementById("search-container");
const closeSearch = document.getElementById("close-search");

searchIcon.addEventListener("click", () => {
    searchContainer.style.display = "flex";
});

closeSearch.addEventListener("click", () => {
    searchContainer.style.display = "none";
})