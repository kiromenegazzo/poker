import { h, Component } from 'preact';
import PropTypes from 'prop-types';

class Language extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    language: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { language, languages, onChange } = this.props;
    return (
      <div className={`language ${isOpen ? '--open' : ''}`}>
        <div className="language__list">
          {languages.map(lang => (
            <label className="language__item" htmlFor={lang}>
              <input
                id={lang}
                type="radio"
                name="language"
                value={lang}
                checked={lang === language}
                onChange={(event) => {
                  onChange(event);
                  this.handleClick();
                }}
              />
              <span />
              {lang}
            </label>
          ))}
        </div>
        <button type="button" onClick={this.handleClick}>
          <span className="icon" />
        </button>
      </div>
    );
  }
}

export { Language };
