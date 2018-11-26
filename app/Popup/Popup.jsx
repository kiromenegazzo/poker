import { h, Component } from 'preact'; //eslint-disable-line
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../helpers';

class Popup extends Component {
  static propTypes = {
    hand: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      src: PropTypes.string,
    }).isRequired,
    coordinates: PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleKeyDown = (event) => {
    const { keyCode } = event;
    const { onClick } = this.props;

    if (keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      onClick();
    }
  };

  render() {
    const { hand, coordinates, onClick } = this.props;
    const { name, description, src } = hand || {};
    const { x, y } = coordinates || {};
    const transformOrigin = `${x}% ${y}% 0`;

    return (
      <div
        className={`popup ${coordinates !== null ? '--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog__label"
        style={{ transformOrigin }}
      >
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={onClick}
          onKeyDown={this.handleKeyDown}
        >
          <span className="popup__close-inner" />
        </button>
        <svg className="popup__image">
          <use xlinkHref={src} />
        </svg>
        <h2 className="popup__title" id="dialog__label">
          {name}
        </h2>
        <p className="popup__desc">{description}</p>
      </div>
    );
  }
}

export { Popup };
