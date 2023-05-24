const mainComponent = {
    data: () => ({
        descriptionImageSrc: '',
        descriptionBenefitsList: [
            {
                name: "Unique design",
                imgSrc: "./assets/activated_hart_icon_2.png",
            },
            {
                name: "Different forms",
                imgSrc: "./assets/activated_hart_icon.png",
            },
            {
                name: "Ecologically clean and safe raw materials",
                imgSrc: "./assets/activated_hart_icon.png",
            },
            {
                name: "Fragrances of the highest quality",
                imgSrc: "./assets/activated_hart_icon.png",
            },
            {
                name: "Long burning time",
                imgSrc: "./assets/activated_hart_icon.png",
            },
        ],
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
        imageSrc: "",
        enter: true, 
        leave: false,
        timeOut: null,
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