import PropTypes from "prop-types";
import "./styles/feature_block.scss";

const FeatureBlock = ({ object }) => {
  return (
    <section className="f-container">
      <figure className="f-container__icon">
        <img src={object.icon} alt={object.icon} />
      </figure>
      <div className="f-container__info">
        <h3 className="f-container__info__title">{object.title}</h3>
        <p className="f-container__info__content">{object.content}</p>
      </div>
    </section>
  );
};

FeatureBlock.propTypes = {
  object: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FeatureBlock;
