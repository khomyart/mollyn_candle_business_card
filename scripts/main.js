function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
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

/**
 * Menu scroll
 */
let topMenu = document.querySelector(".top-menu");
let aboutUsFirstSection = document.querySelector("#about-us-section");

if (screenOrientation === 'portrait') {
    topMenu.classList.add("top-menu-show");
}

document.body.onscroll = () => {
    if (screenOrientation === 'lanscape') {
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

let atmospheres = document.querySelectorAll(".about-us-section-for-description");
let appearingDelay = 700; //ms

for (let i = 0; i < 3; i++) {
    setTimeout(()=>{
        atmospheres[i*2].classList.add('drop-down-text-animation');

        if (atmospheres[i*2+1] != undefined) {
            atmospheres[i*2+1].classList.add('drop-down-text-animation');
        }
    }, (i + 1) * appearingDelay)
}