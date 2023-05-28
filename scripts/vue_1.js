const mainComponent = {
    data: () => ({
        showHiddenMenu: false,
        currentSection: '',
        currentSectionDescription: {
            'home-section' : {
                quoteName: 'home',
                href: '#home-section'
            },
            'about-us-section' : {
                quoteName: 'about us',
                href: '#about-us-section'
            },
            'offer-section' : {
                quoteName: 'what we offer',
                href: '#offer-section'
            },
            'products-section' : {
                quoteName: 'products',
                href: '#products-section'
            },
            'contacts-section' : {
                quoteName: 'contacts',
                href: '#contacts-section'
            },
            '': {
                quoteName: '',
                href: ''
            }
        },
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
                    en: "Apple jasmine breeze",
                    sw: "Äppeljasminbris",
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
                        - Price 180 SEK. <br/>
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
                    en: "Tenderness of lavender",
                    sw: "Ömhet av lavendel",
                },
                img: "./assets/products/lavander.jpg",
                description: {
                    en: `
                        Lavender candle - the perfect combination of natural wax and lavender scent 💜 🌿 <br/>
                        Lavender is not only a beautiful plant with a delicate fragrance, but also a very useful and healing herb. <br/>
                        This scented candle is suitable for all occasions and just for relaxation 🧘. <br/>
                        -100ml.<br/>
                        -Natural soy wax from the USA. <br/>
                        -Lavender scent from France. <br/>
                        -The candle burns for 20 hours. <br/>
                        - Price 120 SEK. <br/>
                    `,
                    sw: `
                        Lavendelljus - den perfekta kombinationen av naturligt vax och lavendeldoft 💜 🌿 <br/>
                        Lavendel är inte bara en vacker växt med en delikat doft, utan också en mycket användbar och läkande ört. <br/>
                        Det här doftljuset passar för alla tillfällen och bara för avkoppling 🧘‍♀️. <br/>
                        -100ml.<br/>
                        -Naturligt sojavax från USA. <br/>
                        -Lavendeldoft från Frankrike. <br/>
                        -Ljuset brinner i 20 timmar. <br/>
                        -Pris 120 SEK. <br/>
                    `,
                }
            },
            {
                name: {
                    en: "Vivacity of morning coffee",
                    sw: "Morgonkaffets livlighet",
                },
                img: "./assets/products/coffee.jpg",
                description: {
                    en: `
                        These coffee candles will win everyone's heart 🫶🏼 <br/>
                        - Price SEK 200 👍🏼 <br/>
                        <br/>
                        Let the aroma of coffee pamper you<br/>
                    `,
                    sw: `
                        Dessa kaffeljus kommer att vinna allas hjärta 🫶🏼 <br/>
                        -Pris 200 SEK 👍🏼 <br/>
                        <br/>
                        Låt doften av kaffe skämma bort dig<br/>
                    `,
                }
            },
        ],
        selectedProduct: {
            name: {
                en: "Apple jasmine breeze",
                sw: "Äppeljasminbris",
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
            'how to reach us': {
                en: 'how to reach us',
                sw: 'hur man når oss'
            },
            'phone number': {
                en: 'phone number',
                sw: 'telefonnumer'
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
            return "";
        },
        changeLanguage(language) {
            this.language = language;
            localStorage.setItem('language', this.language);
        }
    },
    watch: {
        showHiddenMenu(newValue) {
            if (newValue == true) {
                document.body.classList.add('disable-scroll');
            }

            if (newValue == false) {
                document.body.classList.remove('disable-scroll');
            }
        }
    },
    mounted() {
        let localStoreLanguage = localStorage.getItem('language');

        if (localStoreLanguage != null) {
            this.language = localStoreLanguage;
        }
        
        let homeSection = document.querySelector("#home-section");
        let aboutUsSection = document.querySelector("#about-us-section");
        let offerSection = document.querySelector("#offer-section");
        let productsSection = document.querySelector("#products-section");
        let contactsSection = document.querySelector("#contacts-section");
        
        let productDetailContactInfo = document.querySelector("#product-detail-contact-info");
        
        let animationListForElements = {
            'home-section': [
                {
                    elementSelector: '.menu',
                    animationCLass: 'menu-animation'
                },
                {
                    elementSelector: '.divider',
                    animationCLass: 'divider-animation'
                },
                {
                    elementSelector: '.description',
                    animationCLass: 'description-animation'
                },
            ],
            'about-us-section': [
                {
                    elementSelector: '.about-us-section-devider-holder',
                    animationCLass: 'about-us-section-devider-holder-animation'
                },
                {
                    elementSelector: '.about-us-section-additional-text-how',
                    animationCLass: 'about-us-section-additional-text-how-animation'
                },
                {
                    elementSelector: '.about-us-section-additional-text-learn-more',
                    animationCLass: 'about-us-section-additional-text-learn-more-animation'
                }
            ],
            'offer-section': [
                {
                    elementSelector: '.description-section-header',
                    animationCLass: 'description-section-header-animation'
                },
                {
                    elementSelector: '.description-menu',
                    animationCLass: 'description-menu-animation'
                },
                {
                    elementSelector: '.description-image-holder',
                    animationCLass: 'description-image-holder-animation'
                },
            ],
            'products-section': [
                {
                    elementSelector: '.products-section-pills-holder',
                    animationCLass: 'products-section-pills-holder-animation'
                },
                {
                    elementSelector: '.product-detail-holder',
                    animationCLass: 'product-detail-holder-animation'
                },
            ],
            'product-detail-contact-info': [
                {
                    elementSelector: '.product-detail-contact-info',
                    animationCLass: 'product-detail-contact-info-animation'
                },
            ]
        }
        let isAnimationTriggeredFor = {
            'home-section': false,
            'about-us-section': false,
            'offer-section': false,
            'products-section': false,
            'product-detail-contact-info': false,
            'contacts-section': false,
        }

        /**
         * Scroll observer
         */
        let observer;
        
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
        };
        let viewPortHeight = window.innerHeight - 5; //why -5? donnu, just fit here
        function getItemHeight(itemSelector) {
            let element = document.querySelector(itemSelector);
            return element.offsetHeight;
        }
        
        observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                //defining current window logic  
                if (entry.target.id != 'product-detail-contact-info') {
                    let howMuchViewportFilledWithTargetObject = 
                        (entry.intersectionRatio * getItemHeight(`#${entry.target.id}`)) / viewPortHeight
                    if (entry.intersectionRatio > 0.7 || howMuchViewportFilledWithTargetObject > 0.7) {
                        this.currentSection = entry.target.id;
                        console.log(this.currentSection)
                    }
                }

                //animation on appearing logic
                if (entry.intersectionRatio > 0.3 && entry.isIntersecting) {
                    if (entry.target.id in animationListForElements) {
                        //special "script" condition for about-us-section
                        if (entry.target.id === 'about-us-section' 
                            && !isAnimationTriggeredFor['about-us-section']) {
                            let atmospheres = document.querySelectorAll(".about-us-section-for-description");
                            let appearingDelay = 700; //ms
                            let delayBeforeStart = 0; //ms
                            setTimeout(()=>{
                                for (let i = 0; i < 3; i++) {
                                    setTimeout(()=>{
                                        atmospheres[i*2].classList.add('drop-down-text-animation');
                                
                                        if (atmospheres[i*2+1] != undefined) {
                                            atmospheres[i*2+1].classList.add('drop-down-text-animation');
                                        }
                                    }, (i + 1) * appearingDelay)
                                }
                            }, delayBeforeStart)
                        }
                            
                        if (!isAnimationTriggeredFor[entry.target.id]) {
                            if (entry.target.id == 'offer-section') {
                                //switching slides of benefits
                                let amountOfBenefitsItems = this.descriptionBenefitsList.length;
                                let slideIndex = 1;
                                this.slideInterval = setInterval(()=>{
                                    this.descriptionImageSrc = this.descriptionBenefitsList[slideIndex].imgSrc;
                                    slideIndex = slideIndex + 1 === amountOfBenefitsItems ? 0 : slideIndex + 1;
                                }, 5000)
                            }
                            animationListForElements[entry.target.id].forEach((el)=>{
                                let currentElements = 
                                document.querySelectorAll(el.elementSelector);
                                currentElements.forEach((selectedEl)=>{
                                    selectedEl.classList.add(el.animationCLass);
                                })
                            })

                            isAnimationTriggeredFor[entry.target.id] = true;
                        }
                    }
                }
            });
        }, options);
        observer.observe(homeSection);
        observer.observe(aboutUsSection);
        observer.observe(offerSection);
        observer.observe(productsSection);
        observer.observe(contactsSection);
        
        //additional observers
        observer.observe(productDetailContactInfo);
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
    <div id="product-section-detail" :class="{'image-enter': enter, 'image-leave': leave}" 
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
        // let options = {
        //     root: null,
        //     rootMargin: "0px",
        //     threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
        // };
        // let observer = new IntersectionObserver((entries)=>{
        //     entries.forEach((entry)=>{
        //         console.log(entry.target.id)
        //         console.log(entry.intersectionRatio)
        //     })
        // }, options)

        // observer.observe(this.$el)
    }
})

.mount("#app");