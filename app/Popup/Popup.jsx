import { h, Component } from 'preact'; //eslint-disable-line

class Popup extends Component {
  render() {
    const { hand: { name, description, src } = {}, coords: { x, y } = {} } = this.props;
    const transformOrigin = `${x}% ${y}% 0`;

    return (
      <div
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog__label"
        style={{ transformOrigin }}
      >
        <button className="popup__close" type="button" aria-label="Закрыть">
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
