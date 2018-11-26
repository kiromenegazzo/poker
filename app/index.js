import './styles.less';
import { h, render, Component } from 'preact'; //eslint-disable-line
import './sprite.svg';
import { Poker } from './Poker';
import { Welcome } from './Welcome';
import { Popup } from './Popup';
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

    const coordinates = { x, y };

    this.setState({ coordinates, hand: { ...hands[index], src: `#sprite_${index + 1}` } });
  };

  handleClose = () => {
    this.setState({ coordinates: null, hand: null });
  };

  render() {
    const {
      language, languages, hands, hand, isLoaded, dictionary, coordinates,
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
        <Popup hand={hand} coordinates={coordinates} onClick={this.handleClose} />
      </div>
    );
  }
}

render(<App />, root);
