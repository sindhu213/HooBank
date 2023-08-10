import { UserFeedback } from "../components";
import { feedback } from "../constants/data";
import "./styles/testimonial.scss";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial__header">
        <h1>What people are saying about us</h1>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="testimonial__unit">
        {feedback.map((unit) => (
          <UserFeedback key={unit.id} object={unit} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
