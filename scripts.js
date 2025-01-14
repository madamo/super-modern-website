
// Search Elements
const searchIcon = document.getElementById("search-icon");
const searchContainer = document.getElementById("search-container");
const closeSearch = document.getElementById("close-search");

// Menu Elements
const showMenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

// Feature Scroll Elements
const featureContainer = document.getElementById("features");
const featureImgBg = document.getElementById("feature-img-bg"); // will eventually need to change this
const featureImages = document.getElementsByClassName("feature-img")
const featureContainerTop = featureContainer.offsetTop;
const featureOffset = document.getElementsByClassName("feature")[0].offsetHeight;
// TO-DO: get the height of a feature element to use as an offset

//console.log(`feature section top: ${featureContainer.offsetTop}`);
console.log(`feature element height: ${featureOffset}`);


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

//TO-DO: figure out where the Feature headline is, change stuff when it's in the center of the image
document.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    if (window.scrollY > featureContainerTop && window.scrollY < featureContainerTop + featureOffset) { // compare scrollY to featureContainerTop
        featureImgBg.style.backgroundColor = "lightpink"
        featureImages[0].classList.add("show-feature-img")
        featureImages[1].classList.remove("show-feature-img")
        console.log("img1")
    } else if (window.scrollY > featureContainerTop + featureOffset && window.scrollY < featureContainerTop + (featureOffset*2)) {
        featureImgBg.style.backgroundColor = "green"
        featureImages[1].classList.add("show-feature-img")
        featureImages[0].classList.remove("show-feature-img")
        featureImages[2].classList.remove("show-feature-img")

        console.log("img2")

    } else if (window.scrollY > featureContainerTop + (featureOffset*2) && window.scrollY < featureContainerTop + (featureOffset*3)) {
        featureImgBg.style.backgroundColor = "lightseagreen"
        featureImages[2].classList.add("show-feature-img")
        featureImages[1].classList.remove("show-feature-img")
        featureImages[3].classList.remove("show-feature-img")
        console.log("img3")

    } else if (window.scrollY > featureContainerTop + (featureOffset*3)) {
        featureImgBg.style.backgroundColor = "lightcyan"
        featureImages[3].classList.add("show-feature-img")
        featureImages[2].classList.remove("show-feature-img")

        console.log("img4")

    }

})

console.log(featureImages);

/*featureContainer.addEventListener("scroll", (event) => {
    //alert("scrolling!");
    console.log(featureContainer.scrollTop);
})*/