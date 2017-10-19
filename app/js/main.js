'use strict';

const Poker = function() {

    const self = this;

    this.popup = document.querySelector('.popup');
    this.popupClose = document.querySelector('.popup__close');
    this.cardList = document.querySelector('.card__list');
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

    this.setCardSize = () =>  {
        let cards = self.cardList.children;
        let containerHeight = document.querySelector('.container').clientHeight;
        let rows = window.innerWidth < window.innerHeight ? 5 : 2;

        [].forEach.call(cards, card => {
            card.style.cssText = `height:${containerHeight / rows}px`;
        });
    };

    this.showPopup = index => {
        const popupImage = document.querySelector('.popup__image');
        const popupTitle = document.querySelector('.popup__title');
        const popupDesc = document.querySelector('.popup__desc');

        self.popup.classList.add('popup--open');

        popupImage.style.backgroundImage = `url(img/hand-${index}.png)`;
        popupTitle.innerText = `${self.combName[index - 1]}`;
        popupDesc.innerText = `${self.combDesc[index - 1]}`;
    };

    this.hidePopup = () => {
        self.popup.classList.remove('popup--open');
    };

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
            self.setCardSize();
        }
    };

    this.setTransformOrigin = (transformOriginX, transformOriginY) => {
        self.popup.style.cssText = `-webkit-transform-origin: ${transformOriginX}% ${transformOriginY}% 0;
                                    transform-origin: ${transformOriginX}% ${transformOriginY}% 0;`;

    };

    this.loadImage = () => {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.src = `img/hand-${self.loadIndex}.png`;
            image.onload = () => {
                self.showPercent(self.loadIndex, self.combName.length);
                resolve(image.src);
                if(self.loadIndex !== self.combName.length) {
                    self.loadIndex++;
                    self.loadImage();
                }

            };
            image.onerror = () => reject();
        });
    };

    this.preloadImages = () => {
        let images = [];
        let imagesNumber = self.combName.length, imagesCounter = 0;

        for(let n = 1; n < imagesNumber + 1; n++) {
            images[n] = new Image();
            images[n].src = `img/hand-${n}.png`;
            images[n].onload = () => {
                imagesCounter++;
                self.showPercent(imagesCounter, imagesNumber);
                if(imagesCounter == imagesNumber) {
                    self.setCardSize();
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

    this.popupClose.addEventListener('click', self.hidePopup);
    this.cardList.addEventListener('click', e => {
        let x = Math.round(e.pageX / window.innerWidth * 100);
        let y = Math.round(e.pageY / window.innerHeight * 100);
        let cardItem = e.target;

        if(e.target.className == 'card__image' || e.target.className == 'card__title'){
            cardItem = e.target.parentNode;
        }

        self.setTransformOrigin(x, y);
        self.showPopup(cardItem.getAttribute('data-index'));
    });
    window.addEventListener('resize', self.setCardSize);
    window.applicationCache.addEventListener('updateready', self.checkUpdate);
};

window.addEventListener('DOMContentLoaded', () => {
    const poker = new Poker();

    window.Promise ? poker.loadImage() : poker.preloadImages();


});
