import "./styles/call_to_action.scss";
import PropTypes from "prop-types";

const CallToAction = ({ object, children }) => {
  return (
    <section className="CTA">
      <h1 className="CTA__heading">{object.heading}</h1>
      <p className="CTA__description">{object.description}</p>
      <div className="CTA__direct">{children}</div>
    </section>
  );
};

CallToAction.propTypes = {
  object: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.element,
};

export default CallToAction;
