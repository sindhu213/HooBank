import "./styles/statscard.scss";
import PropTypes from "prop-types";

const StatsCard = ({ object }) => {
  return (
    <section className="stats" id={object.id}>
      <h1 className="stats__count">{object.value}</h1>
      <p className="stats__description">{object.title}</p>
    </section>
  );
};

StatsCard.propTypes = {
  object: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default StatsCard;
