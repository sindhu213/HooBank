import "./styles/user_feedback.scss";
import { quotes } from "../assets";
import PropTypes from "prop-types";

const UserFeedback = ({ object }) => {
  return (
    <section className="feedback">
      <img src={quotes} alt="Opening quotes" />

      <p className="feedback__content">{object.content}</p>

      <div className="feedback__user">
        <figure className="feedback__user__img">
          <img src={object.img} alt="Hoobank user" />
        </figure>

        <div className="feedback__user__info">
          <h3>{object.name}</h3>
          <p>{object.title}</p>
        </div>
      </div>
    </section>
  );
};

UserFeedback.propTypes = {
  object: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default UserFeedback;
