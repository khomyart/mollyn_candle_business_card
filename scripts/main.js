document.body.onscroll = () => {
    console.log(window.scrollY)
}

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