'use strict';

const Poker = function() {

    const popup = document.querySelector('.popup');
    const popupClose = document.querySelector('.popup__close');
    const cardList = document.querySelector('.card__list');
    const isMobile = (navigator.userAgent.match(/iPad|iPhone|Mobile|Android|Windows Phone/g) ? true : false);
    let focusedEl = null;

    const setCardSize = () =>  {
        const cards = document.getElementsByClassName('card__item');
        const container = document.querySelector('.container');
        const containerHeight = container.clientHeight;
        const rows = window.innerWidth < window.innerHeight ? 5 : 2;

        [].forEach.call(cards, card => {
            card.style.height = `${containerHeight / rows}px`;
        });
    };

    const setPopupContent = index => {
        const popupImage = document.querySelector('.popup__image use');
        const popupTitle = document.querySelector('.popup__title');
        const cardTitle = document.getElementsByClassName('card__title')[index - 1];
        const popupDesc = document.querySelector('.popup__desc');

        popupImage.setAttribute('xlink:href', `#${index}`);
        popupTitle.innerText = `${cardTitle.innerText}`;
        popupDesc.innerText = `${cardTitle.getAttribute('data-desc')}`;
    };

    const openPopup = () => {
        if(focusedEl !== null) popupClose.focus();
        popup.classList.add('popup--open');
    };

    const closePopup = () => {
        if(focusedEl !== null) focusedEl.focus();
        popup.classList.remove('popup--open');
    };

    const setTransformOrigin = (x, y) => {
        popup.style.cssText = `-webkit-transform-origin: ${x}% ${y}% 0;
                                    transform-origin: ${x}% ${y}% 0;`;
    };

    const buildPopup = () => {
        let x = Math.round(event.pageX / window.innerWidth * 100) || '50';
        let y = Math.round(event.pageY / window.innerHeight * 100) || '50';
        let cardItem = event.target;

        if(event.target.tagName == 'svg' || event.target.className == 'card__title'){
            cardItem = event.target.parentNode;
        } else if(event.target.tagName == 'use') {
            cardItem = event.target.parentNode.parentNode;
        }

        setTransformOrigin(x, y);
        setPopupContent(cardItem.getAttribute('data-card'));
        focusedEl = !isMobile ? cardItem : null;
        openPopup();
    };

    const actionHandler = () => {
        const eventType = event.type;

        if (eventType === 'keydown') {
            if (event.keyCode === 13 || event.keyCode === 32) {
                buildPopup();
            }
        } else if (eventType === 'click') {
            buildPopup();
        }
    };

    const setHref = () => {
        const images = document.querySelectorAll('.card__image use');

        [].forEach.call(images, (image, i) => {
            image.setAttribute('xlink:href', `#${i + 1}`);
        });
    };

    this.preloadSprite = () => {
        const body = document.body;
        const preload = document.querySelector('.preload');
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'img/sprite.svg', true);
        xhr.send();

        xhr.onload = e => {
            body.removeChild(preload);
            popup.insertAdjacentHTML('afterEnd', e.target.response);
            setHref();
        };
    };

    const checkUpdate = () => {
        if(window.applicationCache) {

            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {

                window.applicationCache.swapCache();
                if (confirm('A new version of this site is available. Load it?')) {
                    window.location.reload();
                }
            }
        }
    };

    popupClose.addEventListener('click', closePopup);
    cardList.addEventListener('click', actionHandler);
    cardList.addEventListener('keydown', actionHandler);
    popup.addEventListener('keydown', (e) => {
        if(e.keyCode == '9') {
            e.preventDefault();
        } else if(e.keyCode == '27') {
            closePopup();
        }
    });

    setCardSize();
    window.addEventListener('resize', setCardSize);
    window.applicationCache.addEventListener('updateready', checkUpdate);
};

window.addEventListener('DOMContentLoaded', () => {
    const poker = new Poker();
    poker.preloadSprite();
});
