'use strict';

const Poker = function() {

    this.body = document.body;
    this.popup = document.querySelector('.popup');
    this.popupClose = document.querySelector('.popup__close');
    this.cardList = document.querySelector('.card__list');
    this.isMobile = (navigator.userAgent.match(/iPad|iPhone|Mobile|Android|Windows Phone/g) ? true : false);

    this.showPercent = (current, total) => {
        let percent = Math.round(current/total * 100);
        const preload = document.querySelector('.preload');
        const preloadPercent = document.querySelector('.preload__percent');
        const preloadLine = document.querySelector('.preload__line');

        preloadPercent.setAttribute('data-percent', percent);
        preloadLine.style.cssText = `-webkit-transform: translate3d(-${100 - percent}%,0,0);
                                     transform: translate3d(-${100 - percent}%,0,0)`;

        if(current == total) {
            this.body.removeChild(preload);
            console.log(this.body, this.body.children);
        }
    };

    this.setCardSize = () =>  {
        const cards = document.getElementsByClassName('card__item');
        const container = document.querySelector('.container');
        const containerHeight = container.clientHeight;
        const rows = window.innerWidth < window.innerHeight ? 5 : 2;

        [].forEach.call(cards, card => {
            card.style.height = `${containerHeight / rows}px`;
        });
    };

    this.setPopupContent = index => {
        const popupImage = document.querySelector('.popup__image use');
        const popupTitle = document.querySelector('.popup__title');
        const cardTitle = document.getElementsByClassName('card__title')[index - 1];
        const popupDesc = document.querySelector('.popup__desc');

        popupImage.setAttribute('xlink:href', `#${index}`);
        popupTitle.innerText = `${cardTitle.innerText}`;
        popupDesc.innerText = `${cardTitle.getAttribute('data-desc')}`;
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

    this.setHref = () => {
        const images = document.querySelectorAll('.card__image use');

        [].forEach.call(images, (image, i) => {
            image.setAttribute('xlink:href', `#${i + 1}`);
        });
    };

    this.preloadSprite = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'img/sprite.svg', true);
        xhr.send();

        xhr.onprogress = e => {
            if(e.lengthComputable) {
                console.log(e.loaded, e.total);
                this.showPercent(e.loaded, e.total);
            }
        };

        xhr.onreadystatechange = e => {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                this.popup.insertAdjacentHTML('afterEnd', e.target.response);
                this.setHref();
            }
        };

        /*const preload = document.querySelector('.preload');
        const sprite = new Image();
        sprite.src = 'img/sprite.svg';
        sprite.onload = () => {
            //this.popup.insertAdjacentHTML('afterEnd', sprite);
            this.body.appendChild(sprite);
            this.body.removeChild(preload);
            this.setHref();
        };*/
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

    this.setCardSize();
    window.addEventListener('resize', this.setCardSize);
    if(window.applicationCache) window.applicationCache.addEventListener('updateready', this.checkUpdate);
};

window.addEventListener('DOMContentLoaded', () => {
    const poker = new Poker();
    poker.preloadSprite();
});
