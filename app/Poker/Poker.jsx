import { h, Component } from 'preact'; // eslint-disable-line

class Poker extends Component {
  render() {
    const { hands, onClick } = this.props;

    return (
      <div className="container">
        <div className="card__list">
          {hands.map(({ name }, index) => (
            <div className="card__item" tabIndex="0" role="button" onClick={event => onClick(event, index)}>
              <svg className="card__image">
                <use xlinkHref="" />
              </svg>
              <span className="card__title">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { Poker };
