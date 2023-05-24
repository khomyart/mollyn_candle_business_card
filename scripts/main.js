document.body.onscroll = () => {
    console.log(window.scrollY)
}

let flames = document.querySelectorAll(".about-us-section-flame");
flames[0].classList.add('flame-animation')

setTimeout(()=>{
    flames[1].classList.add('flame-animation')
}, 3000)

setTimeout(()=>{
    flames[2].classList.add('flame-animation')
}, 6000)

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