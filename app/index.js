import './styles.less';
import { h, render, Component } from 'preact';
import { Poker } from './Poker';
import { Welcome } from './Welcome';
import { Popup } from './Popup';
import { Language } from './Language';
import dict from './intl';
import url from './sprite.svg';

const root = document.getElementById('root');

class App extends Component {
  state = {
    dictionary: dict,
    languages: ['ru', 'en'],
    language: 'ru',
    hands: [...dict.ru.hands],
    hand: null,
    isLoaded: false,
    coordinates: null,
    sprite: null,
  };

  componentDidMount() {
    this.fetchSprite();
  }

  componentDidUpdate() {
    console.log('state is ', this.state); // eslint-disable-line
  }

  fetchSprite = () => {
    fetch(url)
      .then(res => res.text())
      .then((res) => {
        this.setState({
          sprite: res,
          isLoaded: true,
        });
      });
  };

  handleChangeLanguage = (event) => {
    this.setState({
      language: event.target.value,
      hands: [...dict[event.target.value].hands],
    });
  };

  handleClick = (event, index) => {
    const { hands } = this.state;
    const { pageX, pageY } = event;
    const { innerWidth, innerHeight } = window;
    const x = Math.round((pageX / innerWidth) * 100) || '50';
    const y = Math.round((pageY / innerHeight) * 100) || '50';

    const coordinates = { x, y };

    this.setState({ coordinates, hand: { ...hands[index], src: `#${index + 1}` } });
  };

  handleClose = () => {
    this.setState({ coordinates: null, hand: null });
  };

  render() {
    const {
      language,
      languages,
      hands,
      hand,
      isLoaded,
      dictionary,
      coordinates,
      sprite,
    } = this.state;
    const { title, text, error } = dictionary[language];

    if (!window.fetch) {
      return (
        <div className="bg">
          <div className="error">
            <span role="img" aria-label="error">❌️</span>
            {error}
          </div>
        </div>
      );
    }

    return (
      <div className="bg">
        {sprite && <span className="hidden" dangerouslySetInnerHTML={{ __html: sprite }} /> /*eslint-disable-line*/}
        <Language language={language} languages={languages} onChange={this.handleChangeLanguage} />
        <h1 className="title">{title}</h1>
        <p className="subtitle">{text}</p>
        {isLoaded ? (
          <Poker hands={hands} onClick={this.handleClick} />
        ) : (
          <Welcome language={language} languages={languages} />
        )}
        <Popup hand={hand} coordinates={coordinates} onClick={this.handleClose} />
      </div>
    );
  }
}

render(<App />, root);
