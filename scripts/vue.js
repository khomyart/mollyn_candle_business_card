const mainComponent = {
    data: () => ({
        language: "sw",
        // language: "en",
        slideInterval: null,
        descriptionImageSrc: "./assets/description-menu/unique_design.png",
        descriptionBenefitsList: [
            {
                name: "unique design",
                imgSrc: "./assets/description-menu/unique_design.png",
            },
            {
                name: "different shapes",
                imgSrc: "./assets/description-menu/different_forms.png",
            },
            {
                name: "ecologically clean and safe raw materials",
                imgSrc: "./assets/description-menu/eco.png",
            },
            {
                name: "fragrances of the highest quality",
                imgSrc: "./assets/description-menu/aromats.png",
            },
            {
                name: "long burning time",
                imgSrc: "./assets/description-menu/burn.png",
            },
        ],
        products: [
            {
                name: {
                    en: "Fluff yFluffy Fluffy",
                    sw: "Sw Fluff yFluffy Fluffy",
                },
                img: "./assets/products/epple.jpg",
                description: {
                    en: `
                        What is heat? Coziness, the scent of a candle and the flickering of the flame 🕯 <br/>
                        Thanks to natural ingredients, our candles are completely safe and environmentally friendly 🕊️ <br/>
                        We would like to present our apple and jasmine scented candles decorated with dried flowers 🌸 <br/>
                        The delicate floral scent will fill your home with the scent of spring in just a few minutes ✨ <br/>
                        -Natural soy wax from the USA. <br/>
                        -A fragrance of the highest quality, made in France. <br/>
                        -200 ml. <br/>
                        -The candle burns for 40 hours. <br/>
                        - Price SEK 180. <br/>
                    `,
                    sw: `
                        Vad är värme? Mysighet, doften av ett ljus och flammans flimmer 🕯 <br/>
                        Tack vare naturliga ingredienser är våra ljus helt säkra och miljövänliga 🕊️ <br/>
                        Vi vill presentera våra doftljus med äppel- och jasmindoft som är dekorerade med torkade blommor 🌸 <br/>
                        Den delikata blomdoften kommer att fylla ditt hem med vårens doft på bara några minuter ✨ <br/>
                        -Naturligt sojavax från USA. <br/>
                        -En doft av högsta kvalitet, tillverkad i Frankrike. <br/>
                        -200 ml. <br/>
                        -Ljuset brinner i 40 timmar. <br/>
                        -Pris 180 SEK. <br/>
                    `,
                }
            },
            {
                name: {
                    en: "Fluff",
                    sw: "Sw Fluff",
                },
                img: "./assets/description-menu/aromats.png",
                description: {
                    en: `
                        What is heat? Coziness, the scent of a candle and the flickering of the flame 🕯 <br/>
                        Thanks to natural ingredients, our candles are completely safe and environmentally friendly 🕊️ <br/>
                        We would like to present our apple and jasmine scented candles decorated with dried flowers 🌸 <br/>
                        The delicate floral scent will fill your home with the scent of spring in just a few minutes ✨ <br/>
                        -Natural soy wax from the USA. <br/>
                        -A fragrance of the highest quality, made in France. <br/>
                        -200 ml. <br/>
                        -The candle burns for 40 hours. <br/>
                        - Price SEK 180. <br/>
                    `,
                    sw: `
                        Swe Vad är värme? Mysighet, doften av ett ljus och flammans flimmer 🕯 <br/>
                        Tack vare naturliga ingredienser är våra ljus helt säkra och miljövänliga 🕊️ <br/>
                        Vi vill presentera våra doftljus med äppel- och jasmindoft som är dekorerade med torkade blommor 🌸 <br/>
                        Den delikata blomdoften kommer att fylla ditt hem med vårens doft på bara några minuter ✨ <br/>
                        -Naturligt sojavax från USA. <br/>
                        -En doft av högsta kvalitet, tillverkad i Frankrike. <br/>
                        -200 ml. <br/>
                        -Ljuset brinner i 40 timmar. <br/>
                        -Pris 180 SEK. <br/>
                    `,
                }
            },
            {
                name: {
                    en: "Fluff 2",
                    sw: "Sw Fluff 2",
                },
                img: "./assets/description-menu/aromats.png",
                description: {
                    en: `
                        What is heat? Coziness, the scent of a candle and the flickering of the flame 🕯 <br/>
                        Thanks to natural ingredients, our candles are completely safe and environmentally friendly 🕊️ <br/>
                        We would like to present our apple and jasmine scented candles decorated with dried flowers 🌸 <br/>
                        The delicate floral scent will fill your home with the scent of spring in just a few minutes ✨ <br/>
                    `,
                    sw: `
                        Swe Vad är värme? Mysighet, doften av ett ljus och flammans flimmer 🕯 <br/>
                        Tack vare naturliga ingredienser är våra ljus helt säkra och miljövänliga 🕊️ <br/>
                        Vi vill presentera våra doftljus med äppel- och jasmindoft som är dekorerade med torkade blommor 🌸 <br/>
                        Den delikata blomdoften kommer att fylla ditt hem med vårens doft på bara några minuter ✨ <br/>
                    `,
                }
            },
            {
                name: {
                    en: "Fluff 3",
                    sw: "Sw Fluff 3",
                },
                img: "./assets/description-menu/aromats.png",
                description: {
                    en: `
                        What is heat? Coziness, the scent of a candle and the flickering of the flame 🕯 <br/>
                        Thanks to natural ingredients, our candles are completely safe and environmentally friendly 🕊️ <br/>
                        We would like to present our apple and jasmine scented candles decorated with dried flowers 🌸 <br/>
                        The delicate floral scent will fill your home with the scent of spring in just a few minutes ✨ <br/>
                    `,
                    sw: `
                        Swe Vad är värme? Mysighet, doften av ett ljus och flammans flimmer 🕯 <br/>
                        Tack vare naturliga ingredienser är våra ljus helt säkra och miljövänliga 🕊️ <br/>
                        Vi vill presentera våra doftljus med äppel- och jasmindoft som är dekorerade med torkade blommor 🌸 <br/>
                        Den delikata blomdoften kommer att fylla ditt hem med vårens doft på bara några minuter ✨ <br/>
                    `,
                }
            },
            {
                name: {
                    en: "Fluff 4",
                    sw: "Sw Fluff 4",
                },
                img: "./assets/description-menu/aromats.png",
                description: {
                    en: `
                        What is heat? Coziness, the scent of a candle and the flickering of the flame 🕯 <br/>
                        Thanks to natural ingredients, our candles are completely safe and environmentally friendly 🕊️ <br/>
                        We would like to present our apple and jasmine scented candles decorated with dried flowers 🌸 <br/>
                        The delicate floral scent will fill your home with the scent of spring in just a few minutes ✨ <br/>
                    `,
                    sw: `
                        Swe Vad är värme? Mysighet, doften av ett ljus och flammans flimmer 🕯 <br/>
                        Tack vare naturliga ingredienser är våra ljus helt säkra och miljövänliga 🕊️ <br/>
                        Vi vill presentera våra doftljus med äppel- och jasmindoft som är dekorerade med torkade blommor 🌸 <br/>
                        Den delikata blomdoften kommer att fylla ditt hem med vårens doft på bara några minuter ✨ <br/>
                    `,
                }
            },
            {
                name: {
                    en: "Fluff 5",
                    sw: "Sw Fluff 5",
                },
                img: "./assets/description-menu/aromats.png",
                description: {
                    en: `123`,
                    sw: `swe 123`,
                }
            },
            {
                name: {
                    en: "Fluff 6",
                    sw: "Sw Fluff 6",
                },
                img: "./assets/description-menu/aromats.png",
                description: {
                    en: `123`,
                    sw: `swe 123`,
                }
            },
            {
                name: {
                    en: "Fluff 7",
                    sw: "Sw Fluff 7",
                },
                img: "./assets/description-menu/aromats.png",
                description: {
                    en: `123`,
                    sw: `swe 123`,
                }
            },
            {
                name: {
                    en: "Fluff Fluff 7Fluff 7Fluff 8",
                    sw: "Sw Fluff Fluff 7Fluff 7Fluff 8",
                },
                img: "./assets/description-menu/aromats.png",
                description: {
                    en: `123`,
                    sw: `swe 123`,
                }
            },
        ],
        selectedProduct: {
            name: {
                en: "Fluff yFluffy Fluffy",
                sw: "Sw Fluff yFluffy Fluffy",
            },
            img: "./assets/products/epple.jpg",
            description: {
                en: `
                    What is heat? Coziness, the scent of a candle and the flickering of the flame 🕯 <br/>
                    Thanks to natural ingredients, our candles are completely safe and environmentally friendly 🕊️ <br/>
                    We would like to present our apple and jasmine scented candles decorated with dried flowers 🌸 <br/>
                    The delicate floral scent will fill your home with the scent of spring in just a few minutes ✨ <br/>
                    -Natural soy wax from the USA. <br/>
                    -A fragrance of the highest quality, made in France. <br/>
                    -200 ml. <br/>
                    -The candle burns for 40 hours. <br/>
                    - Price SEK 180. <br/>
                    `,
                sw: `
                    Vad är värme? Mysighet, doften av ett ljus och flammans flimmer 🕯 <br/>
                    Tack vare naturliga ingredienser är våra ljus helt säkra och miljövänliga 🕊️ <br/>
                    Vi vill presentera våra doftljus med äppel- och jasmindoft som är dekorerade med torkade blommor 🌸 <br/>
                    Den delikata blomdoften kommer att fylla ditt hem med vårens doft på bara några minuter ✨ <br/>
                    -Naturligt sojavax från USA. <br/>
                    -En doft av högsta kvalitet, tillverkad i Frankrike. <br/>
                    -200 ml. <br/>
                    -Ljuset brinner i 40 timmar. <br/>
                    -Pris 180 SEK. <br/>
                `,
            }
        },
        quotes: {
            'home': {
                en: "home",
                sw: "hem"
            },
            'about us': {
                en: "about us",
                sw: "om oss"
            },
            'what we offer': {
                en: "what we offer",
                sw: "vad vi erbjuder"
            },
            'products': {
                en: "products",
                sw: "produkter"
            },
            'contacts': {
                en: "contacts",
                sw: "kontakter"
            },
            'home-made candles': {
                en: 'home-made candles',
                sw: 'hemstöpta starinljus'
            },
            'we': {
                en: 'we',
                sw: 'vi'
            },
            'create': {
                en: 'create',
                sw: 'skapar'
            },
            'atmosphere': {
                en: 'atmosphere',
                sw: 'atmosfär'
            },
            'for': {
                en: 'for',
                sw: 'för'
            },
            'relaxing': {
                en: 'relaxing',
                sw: 'avkoppling'
            },
            'sleeping': {
                en: 'sleeping',
                sw: 'att sova'
            },
            'study': {
                en: 'study',
                sw: 'studier'
            },
            'working': {
                en: 'working',
                sw: 'arbetssätt'
            },
            'meditation': {
                en: 'meditation',
                sw: 'meditation'
            },
            'how': {
                en: 'how',
                sw: 'hur'
            },
            'scroll down or press': {
                en: 'scroll down or press',
                sw: 'scrolla ner eller tryck på'
            },
            'to learn more': {
                en: 'to learn more',
                sw: 'för att lära dig mer'
            },
            'candles': {
                en: 'candles',
                sw: 'starinljus'
            },
            'thanks to labor of our': {
                en: 'thanks to labor of our',
                sw: 'tack vare vår kärleks'
            },
            'love': {
                en: 'love',
                sw: 'arbete'
            },
            'we offer you something special': {
                en: 'we offer you something special',
                sw: 'erbjuder vi dig något speciellt'
            },
            'unique design': {
                en: 'unique design',
                sw: 'unik design'
            },
            'different shapes': {
                en: 'different shapes',
                sw: 'olika former'
            },
            'ecologically clean and safe raw materials': {
                en: 'ecologically clean and safe raw materials',
                sw: 'ekologiskt rena och säkra råvaror'
            },
            'fragrances of the highest quality': {
                en: 'fragrances of the highest quality',
                sw: 'dofter av högsta kvalitet'
            },
            'long burning time': {
                en: 'long burning time',
                sw: 'lång brinntid'
            },
            'our products': {
                en: 'our products',
                sw: 'våra produkter'
            },
            'select something from what we offer': {
                en: 'select something from what we offer',
                sw: 'välj något från det vi erbjuder'
            },
            // 'love': {
            //     en: 'love',
            //     sw: 'arbete'
            // },
            
        }
    }), 
    methods: {
        showImage(imageSrc) {
            if (this.slideInterval != null) {
                clearInterval(this.slideInterval);
            }
            
            this.descriptionImageSrc = imageSrc;
        },
        selectProduct(index) {
            this.selectedProduct = this.products[index];
        },
        quote(quoteName, capitalize = false) {
            let quote = this.quotes[quoteName];
            if (quote != undefined) {
                return capitalize === true 
                    ? quote[this.language].charAt(0).toUpperCase() + quote[this.language].slice(1) 
                    : quote[this.language]
            }
            return "none";
        },
    },
    mounted() {
        //descriptionImageSrc
        let amountOfBenefitsItems = this.descriptionBenefitsList.length;
        let index = 1;
        this.slideInterval = setInterval(()=>{
            this.descriptionImageSrc = this.descriptionBenefitsList[index].imgSrc;
            index = index + 1 === amountOfBenefitsItems ? 0 : index + 1;
        }, 5000)
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

.component('product-detail', {
    template: `
    <div
        :class="{'image-enter': enter, 'image-leave': leave}" 
        class="col-12 d-flex flex-column align-items-center selected-product-detail">
        <div class="selected-product-detail-image-holder">
            <img :src="product.img" alt="">
        </div>
        <div class="selected-product-detail-name col-12 justify-content-start">
            {{product.name}}
        </div>
        <div class="selected-product-detail-description">
            <div class="selected-product-detail-description-background">
            </div>
            <div class="selected-product-detail-description-text">
                <span v-html="product.description"></span>
            </div>
        </div>
    </div>
    `,
    props: ["name", "img", "description", "lang"],
    data: () => ({
        enter: true, 
        leave: false,
        timeOut: null,
        product: {
            name: "Fluff yFluffy Fluffy",
            img: "./assets/products/epple.jpg",
            description: `
            What is heat? Coziness, the scent of a candle and the flickering of the flame 🕯 <br/>
            Thanks to natural ingredients, our candles are completely safe and environmentally friendly 🕊️ <br/>
            We would like to present our apple and jasmine scented candles decorated with dried flowers 🌸 <br/>
            The delicate floral scent will fill your home with the scent of spring in just a few minutes ✨ <br/>
            -Natural soy wax from the USA. <br/>
            -A fragrance of the highest quality, made in France. <br/>
            -200 ml. <br/>
            -The candle burns for 40 hours. <br/>
            - Price SEK 180. <br/>
            `
        },
    }), 
    watch: {
        name(newValue, oldValue){
            clearTimeout(this.timeOut);
            this.enter = false;
            this.leave = true;

            this.timeOut = setTimeout(()=>{
                this.product.name = newValue;
                this.product.img = this.img;
                this.product.description = this.description;
                this.enter = true;
                this.leave = false;
            }, 400)
        },
        lang(newValue, oldValue){
            clearTimeout(this.timeOut);
            this.enter = false;
            this.leave = true;

            this.timeOut = setTimeout(()=>{
                this.product.name = this.name;
                this.product.img = this.img;
                this.product.description = this.description;
                this.enter = true;
                this.leave = false;
            }, 400)
        }
    },
})

.mount("#app");