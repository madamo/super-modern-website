
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
const featureMargin = 100; //TO-DO: get the margin dynamically in case it changes later

let viewport = window.innerWidth;

// Widget Elements
const widgetDetails = document.getElementById("widget-details");
const widgetContainer = document.getElementById("widget-container");
const filterChips = document.getElementsByClassName("filter-chip");

// Create widget data
const widgets = [
    {
        img: "https://fakeimg.pl/600x400?text=Image+4&font=noto",
        icon: "fa-solid fa-face-smile",
        desc: "Here's what the card says: ONE",
        tag: "smiles"
        
    },
    {
        img: "https://fakeimg.pl/600x400?text=Image+4&font=noto",
        icon: "fa-solid fa-face-smile",
        desc: "Here's what the card says: ONE",
        tag: "smiles"
    },
    {
        img: "https://fakeimg.pl/600x400?text=Image+4&font=noto",
        icon: "fa-solid fa-mug-hot",
        desc: "Here's what the card says: TWO",
        tag: "coffee"
    },
    {
        img: "https://fakeimg.pl/600x400?text=Image+4&font=noto",
        icon: "fa-solid fa-mug-hot",
        desc: "Here's what the card says: TWO",
        tag: "coffee"
    },
    {
        img: "https://fakeimg.pl/600x400?text=Image+4&font=noto",
        icon: "fa-solid fa-lemon",
        desc: "Here's what the card says: THREE",
        tag: "lemons"
    },
    {
        img: "https://fakeimg.pl/600x400?text=Image+4&font=noto",
        icon: "fa-solid fa-lemon",
        desc: "Here's what the card says: THREE",
        tag: "lemons"
    },
    {
        img: "https://fakeimg.pl/600x400?text=Image+4&font=noto",
        icon: "fa-solid fa-lemon",
        desc: "Here's what the card says: THREE",
        tag: "lemons"
    },
    {
        img: "https://fakeimg.pl/600x400?text=Image+4&font=noto",
        icon: "fa-solid fa-snowflake",
        desc: "Here's what the card says: FOUR",
        tag: "snow"
    },
];


// TO-DO: check debounce
// Refresh breakpoint
/*window.addEventListener("resize", () => {
    setTimeout(() => { 
        viewport = window.innerWidth;
        console.log("resized");
    }, 1000);
})*/

//window.addEventListener("resize", refreshViewport);

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

// TO-DO: Exit images
//COMMENT BACK IN FOR LAUNCH!!!!!
document.addEventListener("scroll", (event) => {
    if (viewport > 1084) {
        console.log(`viewport: ${viewport}`);
        console.log(window.scrollY);
        if (window.scrollY > featureContainerTop && window.scrollY < featureContainerTop + featureOffset + featureMargin - 100) { // compare scrollY to featureContainerTop
            //featureImgBg.style.backgroundPositionY = "40%"
            //featureImgBg.style.backgroundColor = "lightpink"

            featureImages[0].classList.add("show-feature-img")
            featureImages[1].classList.remove("show-feature-img")
            console.log("img1");
            
        } else if (window.scrollY > featureContainerTop + featureOffset && window.scrollY < featureContainerTop + (featureOffset*2)+featureMargin*2 - 100) {
            //featureImgBg.style.backgroundColor = "green"
            //featureImgBg.style.backgroundPositionY = "45%"

            featureImages[1].classList.add("show-feature-img")
            featureImages[0].classList.remove("show-feature-img")
            featureImages[2].classList.remove("show-feature-img")

            console.log("img2")

        } else if (window.scrollY > featureContainerTop + (featureOffset*2) && window.scrollY < featureContainerTop + (featureOffset*3)+featureMargin *3 - 100) {
            //featureImgBg.style.backgroundColor = "lightseagreen"
            //featureImgBg.style.backgroundPositionY = "50%"

            featureImages[2].classList.add("show-feature-img")
            featureImages[1].classList.remove("show-feature-img")
            featureImages[3].classList.remove("show-feature-img")

            console.log("img3")

        } else if (window.scrollY > featureContainerTop + (featureOffset*3 - 100)) {
            //featureImgBg.style.backgroundColor = "lightcyan"
            //featureImgBg.style.backgroundPositionY = "55%"

            featureImages[3].classList.add("show-feature-img")
            featureImages[2].classList.remove("show-feature-img")

            console.log("img4")

        }

      /*  if (window.scrollY > 1260) {
            featureImages[0].classList.add("exit-img");
            //featureImages[0].style.opacity = "0";
        }

        if (window.scrollY > 2160) {
            featureImages[1].classList.add("exit-img");
        }

        if (window.scrollY > 3050) {
            featureImages[2].classList.add("exit-img");
        }*/
    }
})

// Widget cards

const createWidgetCards = () => {
    widgets.forEach((card) => {
        widgetContainer.innerHTML += `
        <div class="widget-card ${card.tag}">
            <img src="${card.img}" />
            <i class="${card.icon}"></i>
            <p class="widget-card-desc">${card.desc}</p>
            <a href="#" class="learn-more">Learn more →</a>
        </div>
        `
    })
}

const filterWidgets = (filterTerm) => {
    console.log(filterTerm);
    widgetContainer.classList.add("filter-in");
    setTimeout(() => {
        const widgetCards = document.getElementsByClassName("widget-card");
        for (let i = 0; i < widgetCards.length; i++) {
            if (filterTerm === "all") {
                widgetCards[i].classList.remove("filtered")
            } else {
                widgetCards[i].classList.add("filtered");
            }
        }
        //window.scrollTo({top: widgetDetails.offsetTop, behavior: "smooth"});
        //widgetContainer.scrollTo(-200,0);
        console.log(widgetCards);
        if (filterTerm !== "all") {
            const filteredList = Array.prototype.filter.call(widgetCards, (card) => card.classList.contains(filterTerm)).map((card) => card.classList.remove("filtered"));
        } else {
            return;
        }

    }, 200);
}



createWidgetCards();

widgetContainer.addEventListener("animationend", (event) => {
    console.log(event.animationName)
    widgetContainer.scrollTo({top: 0, behavior: "smooth"});

    if (event.animationName !== "filter-in") {
        return;
    }
    widgetContainer.classList.remove("filter-in");
})

/*featureImages[0].addEventListener("animationend", (event) => {
    console.log(event.animationName)

    if (event.animationName !== "exit-img") {
        return;
    }
    featureImages[0].classList.remove("exit-img");
})*/


//console.log(featureImages);

/*featureContainer.addEventListener("scroll", (event) => {
    //alert("scrolling!");
    console.log(featureContainer.scrollTop);
})*/