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
        descriptionImageSrc: "./assets/description-menu/converted/unique_design.png",
        descriptionBenefitsList: [
            {
                name: "unique design",
                imgSrc: "./assets/description-menu/converted/unique_design.png",
            },
            {
                name: "different shapes",
                imgSrc: "./assets/description-menu/converted/different_forms_2.png",
            },
            {
                name: "ecologically clean and safe raw materials",
                imgSrc: "./assets/description-menu/converted/eco_2.png",
            },
            {
                name: "fragrances of the highest quality",
                imgSrc: "./assets/description-menu/converted/aromats.png",
            },
            {
                name: "long burning time",
                imgSrc: "./assets/description-menu/converted/burn.png",
            },
        ],
        products: [
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
                        -Pris 150 SEK. <br/>
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
                        A cup of aromatic coffee? ☕️ <br/>
                        Our candle is perfect in every way 💣 from fragrance to execution, a crackling wick for atmospheric relaxation, the scent of good coffee with caramel that can cheer you up in the morning and relax you in the evening. <br/>
                        This light is suitable for any time of day and its versatile design suits both men and women. <br/>
                        Light our coffee candle and in just 20 minutes your room will be filled with a beautiful aroma. <br/>
                        It is a unique gift for you or your loved ones. <br/>
                    
                        -200 ml. <br/>
                        -Natural soy beeswax from the USA <br/>
                        -Premium aroma of coffee-vanilla-caramel produced in France. <br/>
                        -The candle burns for 45 hours. <br/>
                        - The price is 200 SEK. <br/>
                    `,
                    sw: `
                        En kopp aromatiskt kaffe? ☕️ <br/>
                        Vårt ljus är perfekt på alla sätt 💣 från doft till utförande, en sprakande veke för atmosfärisk avkoppling, doften av gott kaffe med karamell som kan muntra upp dig på morgonen och slappna av på kvällen. <br/>
                        Det här ljuset passar för alla tider på dygnet och dess mångsidiga design passar både män och kvinnor. <br/>
                        Tänd vårt kaffeljus och på bara 20 minuter kommer ditt rum att fyllas av en vacker doft. <br/>
                        Det är en unik present till dig eller dina nära och kära. <br/>
                        
                        -200 ml. <br/>
                        -Naturligt soja bivax från USA <br/>
                        -Premium doft av kaffe-vanilj-karamell som produceras i Frankrike. <br/>
                        -Ljuset brinner i 45 timmar. <br/>
                        -Priset är 200 SEK. <br/>
                    `,
                }
            },
            {
                name: {
                    en: "Enchanting beauty",
                    sw: "Förtrollande skönhet",
                },
                img: "./assets/products/woman.jpg",
                description: {
                    en: `
                        Fragrant handmade palm wax candle in the shape of a woman's body. This wax is 100% natural, biodegradable and water soluble! And the frosty pattern on the candle will enchant you! Our candle is an excellent choice as a gift and decoration for your home. Colors: blue, light blue, pink, purple. The candle is delivered in a beautiful and safe gift box. The burning time of a candle is 3 hours.<br/>
                        -The price is 80 SEK. <br/>
                    `,
                    sw: `
                        Doftande handgjort palmvaxljus i form av en kvinnokropp. Detta vax är 100 % naturligt, biologiskt nedbrytbart och vattenlösligt! Och det frostiga mönstret på ljuset kommer att förtrolla dig! Vårt ljus är ett utmärkt val som gåva och dekoration för ditt hem. Färger: blått, ljusblått, rosa, lila. Ljuset levereras i en vacker och säker presentförpackning. Brinntiden för ett ljus är 3 timmar.<br/>
                        -Priset är 80 SEK. <br/>
                    `,
                }
            },
            {
                name: {
                    en: "Serenity of the sea",
                    sw: "Havets lugn",
                },
                img: "./assets/products/rakushkas2.jpg",
                description: {
                    en: `
                        These oyster candles are made for a date with the soul 🌟. </br>
                        They will be an attractive table decoration, a thoughtful gift or an original home decoration.
                        - Natural soy wax from the USA. </br>
                        - Aroma of the highest quality, production France. </br>
                        - Natural oyster shells (heat treated before entering the wax). </br>
                        -Our packaging will not leave anyone untouched. </br>
                        - Set oysters + santo palo SEK 290. </br>
                        The sea highlights the beauty we preserve in our soy candles... </br>
                        </br>
                        Immerse yourself in the scent of the sea 🤍
                    `,
                    sw: `
                        Dessa ostronljus är gjorda för en dejt med själen 🌟. </br>
                        De kommer att vara en attraktiv bordsdekoration, en tankeväckande present eller en original heminredning.
                        - Naturligt sojavax från USA. </br>
                        - Aroma av högsta kvalitet, produktion Frankrike. </br>
                        - Naturliga ostronskal (värmebehandlade innan de går in i vaxet). </br>
                        -Vår förpackning kommer inte att lämna någon oberörd. </br>
                        - Set ostron + santo palo 290 SEK. </br>
                        Havet framhäver skönheten vi bevarar i våra sojaljus... </br>
                        </br>
                        Fördjupa dig i doften av havet 🤍 
                    `,
                }
            },
            //komarics
            // {
            //     name: {
            //         en: "Mosquito-Free Bliss",
            //         sw: "Myggfri Bliss",
            //     },
            //     img: "./assets/products/anti-mosquito.jpg",
            //     description: {
            //         en: `
            //             News❗️ <br/>
            //             Do you want to sit outside this summer without annoying mosquitoes and cook a barbecue 🍖 or drink a cup of coffee ☕️ or sit with your loved ones and friends 👩‍❤️‍💋‍👨, my candles are organic 🌿 and will make your summer beautiful ☀️ without mosquitoes 👍 <br/>
            //             - 200 ml. <br/>
            //             - Natural soy wax from the USA. <br/>
            //             - A special blend of mosquito repellent scents made in France. <br/>
            //             - The candle burns for 40 hours. <br/>
            //             - Price SEK 250. <br/>
            //         `,
            //         sw: `
            //             Nyheter❗️ <br/>
            //             Vill du sitta ute i sommar utan irriterande mygg och laga en grillfest 🍖 eller dricka en kopp kaffe ☕️ eller sitta med dina nära och kära och vänner 👩‍❤️‍💋‍👨, mina ljus är ekologiska 🌿 och kommer att göra din sommar vacker ☀️ utan mygg 👍 <br/>
            //             - 200 ml. <br/>
            //             - Naturligt sojavax från USA. <br/>
            //             - En speciell blandning av myggavvisande dofter tillverkad i Frankrike. <br/>
            //             – Ljuset brinner i 40 timmar. <br/>
            //             - Pris 250 kr. <br/>
            //         `,
            //     }
            // },
            {
                name: {
                    en: "Fresh scent",
                    sw: "Fräsch doft",
                },
                img: "./assets/products/fresh_aromat.jpg",
                description: {
                    en: `
                        Innovative scented candles with jasmine and apple sound very tempting. Jasmine and apple are two different but pleasant scents that can create a cozy and relaxing atmosphere in a room.<br/>
                        The scent of jasmine is usually associated with tenderness, romance and tranquility. It helps to relax and relieve stress, while the scent of apple is usually associated with freshness and comfort. It makes the room feel fresh and cosy.<br/>
                        Enjoy the soft and pleasant scent☺️<br/>
                        <br/>
                        ✔️Burning time 30 hours ⏱️<br/>
                        ✔️Natural soy wax 🌿<br/>
                        ✔️160 ml 🫙<br/>
                        ✔️Price SEK 180<br/>
                    `,
                    sw: `
                        Innovativa doftljus med jasmin och äpple låter väldigt lockande. Jasmin och äpple är två olika men behagliga dofter som kan skapa en mysig och avkopplande atmosfär i ett rum.<br/>
                        Doften av jasmin förknippas vanligtvis med ömhet, romantik och lugn. Den hjälper till att slappna av och lindra stress, medan doften av äpple vanligtvis förknippas med friskhet och komfort. Den får rummet att kännas fräscht och mysigt.<br/>
                        Njut av den mjuka och behagliga doften☺️<br/>
                        <br/>
                        ✔️Brinntid 30 timmar ⏱️<br/>
                        ✔️Naturligt sojavax 🌿<br/>
                        ✔️160 ml 🫙<br/>
                        ✔️Pris 180 SEK<br/>
                    `,
                }
            },
            {
                name: {
                    en: "Rhuberry Delight",
                    sw: "Rhuberry Delight",
                },
                img: "./assets/products/billberry.jpg",
                description: {
                    en: `
                        Every updated scented candle 🕯️</br>
                        The rhubarb note gives freshness, purity, lightness, transparency
                        and sparkle to the whole composition
                        🌿, and the blueberry is
                        a very good and joyful berry 🫐 that will
                        create a playful, seductive atmosphere around you and surround yourself with sweetness and lightness 💟</br>
                        </br>
                        ✔️200 ml 🫙</br>
                        ✔️Natural soy wax from the USA 🌿</br>
                        ✔️Premium fragrances made in France 🇫🇷</br>
                        ✔️ The candle burns for 45 hours ⏱️</br>
                        ✔️Price SEK 200 :-)</br>
                    `,
                    sw: `
                        Vart uppdaterade doftljus 🕯️</br>
                        Rabarbernoten ger friskhet, renhet, lätthet, transparens
                        och gnistra till hela kompositionen
                        🌿, och blabäret är
                        ett väldigt gott och glädjefyllt bär 🫐 som kommer att
                        skapa en lekfull, förförisk atmosfär runt dig och omge dig med sötma och lätthet 💟</br>
                        </br>
                        ✔️200 ml 🫙</br>
                        ✔️Naturligt sojavax från USA 🌿</br>
                        ✔️Premium dofter tillverkade i Frankrike 🇫🇷</br>
                        ✔️ Ljuset brinner i 45 timmar ⏱️</br>
                        ✔️Pris 200 kr :-)</br>
                    `,
                }
            },
        ],
        selectedProduct: {
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
                    -Pris 150 SEK. <br/>
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
            
            <div class="d-flex flex-column ms-md-4 selected-product-detail-description-holder">
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