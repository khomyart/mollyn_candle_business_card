const mainComponent = {
    data: () => ({
        showHiddenMenu: false,
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
                    en: "Apple cinnamon breeze",
                    sw: "Äppelkanelbris",
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
                en: "Apple cinnamon breeze",
                sw: "Äppelkanelbris",
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
            'wanna get this? Feel free to contact us': {
                en: 'wanna get this? Feel free to contact us',
                sw: 'vill du få det här? Kontakta oss gärna'
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
            'choose a mood to see detail': {
                en: 'choose a mood to see detail',
                sw: 'välj ett humör för att se detaljer'
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
        //switching slides of benefits
        let amountOfBenefitsItems = this.descriptionBenefitsList.length;
        let index = 1;
        this.slideInterval = setInterval(()=>{
            this.descriptionImageSrc = this.descriptionBenefitsList[index].imgSrc;
            index = index + 1 === amountOfBenefitsItems ? 0 : index + 1;
        }, 5000)

        let homeSection = document.querySelector("#home-section");
        let aboutUsSection = document.querySelector("#about-us-section");
        let offerSection = document.querySelector("#offer-section");
        let productsSection = document.querySelector("#products-section");
        let contactsSection = document.querySelector("#contacts-section");
        
        /**
         * Scroll observer
         */
        createObserver();
        
        function createObserver() {
            let observer;
          
            let options = {
              root: null,
              rootMargin: "0px",
              threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
            };
          
            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(homeSection);
            observer.observe(aboutUsSection);
          }
        
        function handleIntersect(entries, observer) {
            entries.forEach(entry => {
                console.log(entry.target.id)
                console.log(entry.intersectionRatio)
                console.log(entry.isIntersecting)
            });
        }
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
        class="selected-product-detail d-flex justify-content-center">
        <div class="col-12 d-flex flex-column align-items-center 
            align-items-md-start justify-content-md-start flex-md-row"
        >
            <div class="selected-product-detail-image-holder">
                <img :src="product.img" alt="">
            </div>
            <div class="d-flex flex-column ms-md-4">
                <div class="selected-product-detail-name col-12 justify-content-start">
                    {{product.name}}
                </div>
                <div class="selected-product-detail-description">
                    <div class="selected-product-detail-description-text"
                        v-html="product.description">
                    </div>
                </div>
            <div>
        </div>
    </div>
    `,
    props: ["name", "img", "description", "lang"],
    data: () => ({
        enter: true, 
        leave: false,
        timeOut: null,
        product: {
            name: "",
            img: "",
            description: ``
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
    mounted() {
        this.product.name = this.name;
        this.product.img = this.img;
        this.product.description = this.description;
    }
})

.mount("#app");