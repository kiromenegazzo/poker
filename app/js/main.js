'use strict';

const Poker = function() {

    const self = this;

    this.popup = document.querySelector('.popup');
    this.popupClose = document.querySelector('.popup__close');
    this.cardList = document.querySelector('.card__list');

    this.images = [
        'hand-1.png',
        'hand-2.png',
        'hand-3.png',
        'hand-4.png',
        'hand-5.png',
        'hand-6.png',
        'hand-7.png',
        'hand-8.png',
        'hand-9.png',
        'hand-10.png'
    ];

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
        const preloadPercent = document.querySelector('.preload__percent');
        const preloadLine = document.querySelector('.preload__line');

        preloadPercent.setAttribute('data-percent', percent);
        preloadLine.style.width = `${percent}%`;

        if(counter == number){
            document.body.removeChild(document.querySelector('.preload'));
        }
    };

    this.setTransformOrigin = (transformOriginX, transformOriginY) => {
        self.popup.style.cssText = `transform-origin: ${transformOriginX}% ${transformOriginY}% 0;
                                    -webkit-transform-origin: ${transformOriginX}% ${transformOriginY}% 0;`;

    };

    this.preloadImages = () => {
        let images = [];
        let imagesNumber = self.images.length, imagesCounter = 0;

        for(let n = 0; n < imagesNumber; n++) {
            images[n] = new Image();
            images[n].src = `img/${self.images[n]}`;
            images[n].onload = () => {
                imagesCounter++;
                self.showPercent(imagesCounter, imagesNumber);
                self.setCardSize();
            }
        }
    };

    this.popupClose.addEventListener('click', self.hidePopup);
    this.cardList.addEventListener('click', e => {
        let x = e.pageX / window.innerWidth * 100;
        let y = e.pageY / window.innerHeight * 100;
        let cardItem = e.target;

        if(e.target.className == 'card__image' || e.target.className == 'card__title'){
            cardItem = e.target.parentNode;
        }

        self.setTransformOrigin(x, y);
        self.showPopup(cardItem.getAttribute('data-index'));
    });
    window.addEventListener('resize', self.setCardSize);
};

window.addEventListener('DOMContentLoaded', () => {
    const poker = new Poker();
    poker.preloadImages();
});
