import "./styles/hero.scss";
import { robot, discount } from "../assets";

const Hero = () => {
  return (
    <main className="card-component">
      <article className="card">
        <div className="card__header">
          <img src={discount} alt="Discount" />
          <p className="card__header-description">
            <span>20%</span> discount for <span>1 month</span> account
          </p>
        </div>

        <h1 className="card__title">
          The Next <span>Generation</span> Payment Method.
        </h1>

        <p className="card__description">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </article>

      <figure className="card escape-width">
        <img src={robot} alt="AI-powered banking services" />
      </figure>
    </main>
  );
};

export default Hero;
