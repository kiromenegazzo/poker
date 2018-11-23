import './styles.less';
import './sprite.svg';
import { h, render, Component } from 'preact';
import { Poker } from './Poker';
import { Welcome } from './Welcome';
import { Popup } from './Popup';
import dictionary from './intl';

// TODO:refactor to preact
const root = document.getElementById('root');

class App extends Component {
  state = {
    dictionary,
    languages: ['ru', 'en'],
    language: 'ru',
    hands: [...dictionary.ru.hands],
    hand: {},
    isLoaded: false,
    coords: {},
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoaded: true }), 3000);
  }

  componentDidUpdate() {
    console.log('state is ', this.state); // eslint-disable-line
  }

  handleChangeLanguage = (event) => {
    this.setState({ language: event.target.value });
  };

  handleClick = (event, index) => {
    const { hands } = this.state;
    const { pageX, pageY } = event;
    const { innerWidth, innerHeight } = window;
    const x = Math.round((pageX / innerWidth) * 100) || '50';
    const y = Math.round((pageY / innerHeight) * 100) || '50';

    const coords = { x, y };

    this.setState({ coords, hand: hands[index] });
  };

  render() {
    const {
      language, languages, hands, hand, isLoaded, dictionary, coords,
    } = this.state;
    const { title, text } = dictionary[language];

    return (
      <div className="bg">
        <select
          className="language"
          name="language"
          id="language"
          value={language}
          onChange={this.handleChangeLanguage}
        >
          {languages.map(lang => (
            <option value={lang}>{lang}</option>
          ))}
        </select>
        <h1 className="title">{title}</h1>
        <p className="subtitle">{text}</p>
        {isLoaded ? (
          <Poker hands={hands} onClick={this.handleClick} />
        ) : (
          <Welcome language={language} languages={languages} />
        )}
        <Popup hand={hand} coords={coords} />
      </div>
    );
  }
}

render(<App />, root);

/* const Poker = function () {
  this.popup = document.querySelector('.popup');
  this.popupClose = document.querySelector('.popup__close');
  this.popupImage = document.querySelector('.popup__image use');
  this.popupTitle = document.querySelector('.popup__title');
  this.popupDesc = document.querySelector('.popup__desc');

  this.container = document.querySelector('.container');

  this.cardList = document.querySelector('.card__list');
  this.cards = document.getElementsByClassName('card__item');

  this.isMobile = navigator.userAgent.match(/iPad|iPhone|Mobile|Android|Windows Phone/g);
  this.focusedEl = null;
  this.languages = ['ru', 'en'];
  this.language = 'ru';

  this.setCardSize = this.setCardSize.bind(this);
  this.checkUpdate = this.checkUpdate.bind(this);
  this.actionHandler = this.actionHandler.bind(this);

  this.popupClose.addEventListener('click', this.closePopup);
  this.cardList.addEventListener('click', this.actionHandler);
  this.cardList.addEventListener('keydown', this.actionHandler);
  this.popup.addEventListener('keydown', (event) => {
    const { keyCode, preventDefault } = event;
    if (keyCode === '9') {
      preventDefault();
    } else if (keyCode === '27') {
      this.closePopup();
    }
  });

  this.setCardSize();
  window.addEventListener('resize', this.setCardSize);
  window.applicationCache.addEventListener('updateready', this.checkUpdate);
};

Poker.prototype.setCardSize = function () {
  const containerHeight = this.container.clientHeight;
  const rows = window.innerWidth < window.innerHeight ? 5 : 2;

  Array.prototype.forEach.call(this.cards, (card) => {
    card.style.height = `${containerHeight / rows}px`;
  });
};

Poker.prototype.setPopupContent = function (index) {
  const cardTitle = document.getElementsByClassName('card__title')[index - 1];

  this.popupImage.setAttribute('xlink:href', `#${index}`);
  this.popupTitle.innerText = `${cardTitle.innerText}`;
  this.popupDesc.innerText = `${cardTitle.getAttribute('data-desc')}`;
};

Poker.prototype.openPopup = function () {
  if (this.focusedEl !== null) this.popupClose.focus();
  this.popup.classList.add('--open');
};

Poker.prototype.closePopup = function () {
  if (this.focusedEl !== null) this.focusedEl.focus();
  this.popup.classList.remove('--open');
};

Poker.prototype.setcoords = function (x, y) {
  this.popup.style.cssText = `-webkit-transform-origin: ${x}% ${y}% 0; transform-origin: ${x}% ${y}% 0;`;
};

Poker.prototype.buildPopup = function () {
  const { pageX, pageY, target } = event;
  const x = Math.round((pageX / window.innerWidth) * 100) || '50';
  const y = Math.round((pageY / window.innerHeight) * 100) || '50';
  const cardItem = target;

  this.setcoords(x, y);
  this.setPopupContent(cardItem.getAttribute('data-card'));
  this.focusedEl = !this.isMobile ? cardItem : null;
  this.openPopup();
};

Poker.prototype.actionHandler = function () {
  const { type, keyCode } = event;

  if (type === 'keydown') {
    if (keyCode === 13 || keyCode === 32) {
      this.buildPopup();
    }
  } else if (type === 'click') {
    this.buildPopup();
  }
};

Poker.prototype.setHref = function () {
  const images = document.querySelectorAll('.card__image use');

  Array.prototype.forEach.call(images, (image, i) => {
    image.setAttribute('xlink:href', `#${i + 1}`);
  });
};

Poker.prototype.preloadSprite = function () {
  const { body } = document;
  const preload = document.querySelector('.preload');

  fetch('sprite.svg')
    .then(res => res.text())
    .then((res) => {
      body.removeChild(preload);
      this.popup.insertAdjacentHTML('afterEnd', res);
      this.setHref();
    });
};

Poker.prototype.selectLanguage = function (lang) {
  this.language = lang;
};

Poker.prototype.checkUpdate = function () {
  const { applicationCache, location } = window;
  const { status, UPDATEREADY } = applicationCache;

  if (applicationCache) {
    if (status === UPDATEREADY) {
      applicationCache.swapCache();

      if (confirm('A new version of this site is available. Load it?')) { //eslint-disable-line
        location.reload();
      }
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const poker = new Poker();
  // poker.preloadSprite();

  const select = document.querySelector('select');

  select.addEventListener('change', function () {
    console.log(this.value);
  });
}); */
