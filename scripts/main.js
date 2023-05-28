function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

function getScreenOrientation() {
    let screenOrientation = '';

    switch (screen.orientation.type) {
        case "landscape-primary":
        case "landscape-secondary":
            screenOrientation = 'lanscape';
            break;
        case "portrait-secondary":
        case "portrait-primary":
            screenOrientation = 'portrait';
            break;
    }

    return screenOrientation;
}

/**
 * Menu show
 */
let topMenu = document.querySelector(".top-menu");
let topMenuMobile = document.querySelector(".top-menu-mobile");
let applicationHolder = document.querySelector("#app");

let aboutUsFirstSection = document.querySelector("#about-us-section");

if (getScreenOrientation() === 'portrait') {
    topMenuMobile.style.top = '0';
}

document.body.onscroll = () => {
    if (getScreenOrientation() === 'lanscape') {
        if (window.scrollY > getOffset(aboutUsFirstSection).top - 10) {
            topMenu.classList.add("top-menu-show");
            topMenu.classList.remove("top-menu-hide");
        } else {
            if (topMenu.classList.contains("top-menu-show")) {
                topMenu.classList.add("top-menu-hide");
                topMenu.classList.remove("top-menu-show");
            }
        }
    }
}

/**
 * Flame
 */
let aboutUsSection = document.querySelector(".about-us-section");
let amountOfFlames = 3;

for (let i = 1; i <= amountOfFlames; i++) {
    let flame = document.createElement("div");
    flame.classList.add("about-us-section-flame");
    flame.classList.add(`flame-${i}`);
    aboutUsSection.appendChild(flame);
    setTimeout(()=>{
        flame.classList.add("flame-animation");
    }, 2000 * i - 1)
}
