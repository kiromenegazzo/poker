'use strict';

const Poker = function() {

    this.popup = document.querySelector('.popup');
    this.popupClose = document.querySelector('.popup__close');
    this.cardList = document.querySelector('.card__list');
    this.isMobile = (navigator.userAgent.match(/iPad|iPhone|Mobile|Android|Windows Phone/g) ? true : false);
    this.loadIndex = 1;

    this.combName = [
        'Роял Стрит Флэш',
        'Стрит Флэш',
        'Каре',
        'Фулл хаус',
        'Флеш',
        'Стрит',
        'Тройка',
        'Две пары',
        'Пара',
        'Старшая карта'
    ];

    this.combDesc = [
        '5 старших карт одной масти',
        'любые пять карт одной масти по порядку',
        'четыре карты одного достоинства',
        'одна тройка и одна пара',
        'пять карт одной масти',
        'пять карт по порядку любых мастей',
        'три карты одного достоинства',
        'две пары карт одного достоинства',
        'две карты одного достоинства',
        'ни одна из вышеописанных комбинаций'
    ];

    this.showPercent = (counter, number) => {
        let percent = Math.round(counter/number * 100);
        const preload = document.querySelector('.preload');
        const preloadPercent = document.querySelector('.preload__percent');
        const preloadLine = document.querySelector('.preload__line');

        preloadPercent.setAttribute('data-percent', percent);
        preloadLine.style.cssText = `-webkit-transform: translate3d(-${100 - percent}%,0,0);
                                     transform: translate3d(-${100 - percent}%,0,0)`;

        if(counter == number){
            document.body.removeChild(preload);
            this.setCardSize();
        }
    };

    this.setCardSize = () =>  {
        let cards = this.cardList.children;
        let containerHeight = document.querySelector('.container').clientHeight;
        let rows = window.innerWidth < window.innerHeight ? 5 : 2;

        [].forEach.call(cards, card => {
            card.style.cssText = `height:${containerHeight / rows}px`;
        });
    };

    this.setPopupContent = index => {
        const popupImage = document.querySelector('.popup__image use');
        const popupTitle = document.querySelector('.popup__title');
        const popupDesc = document.querySelector('.popup__desc');

        //popupImage.style.backgroundImage = `url(img/hand-${index}.png)`;
        popupImage.setAttribute('href', `img/sprite.svg#1`);
        //popupImage.setAttribute('href', `img/sprite.svg#${index}`);
        popupTitle.innerText = `${this.combName[index - 1]}`;
        popupDesc.innerText = `${this.combDesc[index - 1]}`;
    };

    this.openPopup = () => {
        if(this.focusedEl !== null) this.popupClose.focus();
        this.popup.classList.add('popup--open');
    };

    this.closePopup = () => {
        if(this.focusedEl !== null) this.focusedEl.focus();
        this.popup.classList.remove('popup--open');
    };

    this.setTransformOrigin = (x, y) => {
        this.popup.style.cssText = `-webkit-transform-origin: ${x}% ${y}% 0;
                                    transform-origin: ${x}% ${y}% 0;`;

    };

    this.buildPopup = () => {
        let x = Math.round(event.pageX / window.innerWidth * 100) || '50';
        let y = Math.round(event.pageY / window.innerHeight * 100) || '50';
        let cardItem = event.target;

        if(event.target.tagName == 'svg' || event.target.className == 'card__title'){
            cardItem = event.target.parentNode;
        } else if(event.target.tagName == 'use') {
            cardItem = event.target.parentNode.parentNode;
        }

        this.setTransformOrigin(x, y);
        this.setPopupContent(cardItem.getAttribute('data-card'));
        this.focusedEl = !this.isMobile ? cardItem : null;
        this.openPopup();
    };

    this.actionHandler = () => {
        const eventType = event.type;

        if (eventType === 'keydown') {
            if (event.keyCode === 13 || event.keyCode === 32) {
                this.buildPopup();
            }
        } else if (eventType === 'click') {
            this.buildPopup();
        }
    };

    this.loadImage = () => {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.src = `img/hand-${this.loadIndex}.png`;
            image.onload = () => {
                this.showPercent(this.loadIndex, this.combName.length);
                resolve(image.src);
                if(this.loadIndex !== this.combName.length) {
                    this.loadIndex++;
                    this.loadImage();
                }

            };
            image.onerror = () => reject();
        });
    };

    this.preloadImages = () => {
        let images = [];
        let imagesNumber = this.combName.length, imagesCounter = 0;

        for(let n = 1; n < imagesNumber + 1; n++) {
            images[n] = new Image();
            images[n].src = `img/hand-${n}.png`;
            images[n].onload = () => {
                imagesCounter++;
                this.showPercent(imagesCounter, imagesNumber);
                if(imagesCounter == imagesNumber) {
                    this.setCardSize();
                }
            };
        }
    };

    this.checkUpdate = () => {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {

            window.applicationCache.swapCache();
            if (confirm('A new version of this site is available. Load it?')) {
                window.location.reload();
            }
        }
    };

    this.popupClose.addEventListener('click', this.closePopup);
    this.cardList.addEventListener('click', this.actionHandler);
    this.cardList.addEventListener('keydown', this.actionHandler);

    this.popup.addEventListener('keydown', () => {
       if(event.keyCode == '9') {
            event.preventDefault();
       } else if(event.keyCode == '27') {
           this.closePopup();
       }
    });

    window.addEventListener('resize', this.setCardSize);
    window.applicationCache.addEventListener('updateready', this.checkUpdate);
};

window.addEventListener('DOMContentLoaded', () => {
    const poker = new Poker();

    window.Promise ? poker.loadImage() : poker.preloadImages();
});
