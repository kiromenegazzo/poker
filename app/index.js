import './styles.less';
import { h, render, Component } from 'preact'; //eslint-disable-line
import { Poker } from './Poker';
import { Welcome } from './Welcome';
import { Popup } from './Popup';
import { Language } from './Language';
import dict from './intl';

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
    fetch('./sprite.svg')
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
    const { title, text } = dictionary[language];

    return (
      <div className="bg">
        {sprite && <span className="hidden" dangerouslySetInnerHTML={{ __html: sprite }} />}
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
