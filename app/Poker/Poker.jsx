import { h, Component } from 'preact'; // eslint-disable-line
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../helpers';

class Poker extends Component {
  static propTypes = {
    hands: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleKeyDown = (event, index) => {
    const { keyCode } = event;
    const { onClick } = this.props;

    if (keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      onClick(event, index);
    }
  };

  render() {
    const { hands, onClick } = this.props;

    return (
      <div className="container">
        <div className="card__list">
          {hands.map(({ name }, index) => (
            <div
              className="card__item"
              tabIndex="0"
              role="button"
              onClick={event => onClick(event, index)}
              onKeyDown={event => this.handleKeyDown(event, index)}
            >
              <svg className="card__image">
                <use xlinkHref={`#${index + 1}`} />
              </svg>
              <span className="card__title">{name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { Poker };
