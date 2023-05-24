const mainComponent = {
    data: () => ({
        descriptionImageSrc: "./assets/description-menu/unique_design.png",
        descriptionBenefitsList: [
            {
                name: "Unique design",
                imgSrc: "./assets/description-menu/unique_design.png",
            },
            {
                name: "Different forms",
                imgSrc: "./assets/description-menu/different_forms.png",
            },
            {
                name: "Ecologically clean and safe raw materials",
                imgSrc: "./assets/description-menu/eco.png",
            },
            {
                name: "Fragrances of the highest quality",
                imgSrc: "./assets/description-menu/aromats.png",
            },
            {
                name: "Long burning time",
                imgSrc: "./assets/description-menu/burn.png",
            },
        ],
        products: [
            {
                name: "Fluff yFluffy Fluffy",
                img: "./assets/products/epple.jpg",
                description: `
                What is heat? Coziness, the scent of a candle and the flickering of the flame 🕯
                Thanks to natural ingredients, our candles are completely safe and environmentally friendly 🕊️
                We would like to present our apple and jasmine scented candles decorated with dried flowers 🌸
                The delicate floral scent will fill your home with the scent of spring in just a few minutes ✨
                -Natural soy wax from the USA.
                -A fragrance of the highest quality, made in France.
                -200 ml.
                -The candle burns for 40 hours.
                - Price SEK 180.
                `
            },
            {
                name: "Fluffy",
                img: "./assets/description-menu/aromats.png",
                description: `
                What is heat? Coziness, the scent of a candle and the flickering of the flame 🕯
                Thanks to natural ingredients, our candles are completely safe and environmentally friendly 🕊️
                We would like to present our apple and jasmine scented candles decorated with dried flowers 🌸
                The delicate floral scent will fill your home with the scent of spring in just a few minutes ✨
                -Natural soy wax from the USA.
                -A fragrance of the highest quality, made in France.
                -200 ml.
                -The candle burns for 40 hours.
                - Price SEK 180.
                `
            },
            {
                name: "Fluffy",
                img: "./assets/description-menu/aromats.png",
                description: `123`
            },
            {
                name: "Fluffy2",
                img: "./assets/description-menu/aromats.png",
                description: `123`
            },
            {
                name: "Fluffy3",
                img: "./assets/description-menu/aromats.png",
                description: `123`
            },
            {
                name: "Fluffy4",
                img: "./assets/description-menu/aromats.png",
                description: `123`
            },
            {
                name: "Fluffy5",
                img: "./assets/description-menu/aromats.png",
                description: `123`
            },
            {
                name: "Fluffy6",
                img: "./assets/description-menu/aromats.png",
                description: `123`
            },
            {
                name: "Fluffy7",
                img: "./assets/description-menu/aromats.png",
                description: `123`
            },
        ]
    }), 
    methods: {
        showImage(imageSrc) {
            this.descriptionImageSrc = imageSrc;
        },
    }
};

const { createApp } = Vue
const app = createApp(mainComponent)

.component('image-component', {
    template: `
        <img :class="{'image-enter': enter, 'image-leave': leave}" :src="imageSrc">
    `,
    data: () => ({
        imageSrc: "./assets/description-menu/unique_design.png",
        enter: true, 
        leave: false,
        timeOut: null,
        defaultSource: "",

    }), 
    props: ['source', 'transitionName'],
    watch: {
        source(newValue, oldValue){
            clearTimeout(this.timeOut);
            this.enter = false;
            this.leave = true;

            this.timeOut = setTimeout(()=>{
                this.imageSrc = newValue;
                this.enter = true;
                this.leave = false;
            }, 400)
        },
    },
})

.component('description-benefits-component', {
    template: `
        <li class="description-menu-section">
            <div class="icon-holder">
            <img src="./assets/hart_icon.png">
            <img src="./assets/activated_hart_icon.png">
            <img 
                :style="{
                    opacity: isActive ? 1 : 0,
                    transition: 'all 0.2s ease-in-out',
                }" 
                src="./assets/activated_hart_icon_2.png">
            </div>
            <span>
                {{name}}
            </span>
        </li>
    `,
    props: ["name", "isActive"],
})

.mount("#app");