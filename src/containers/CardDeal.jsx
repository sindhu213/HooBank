import "./styles/card_deal.scss";
import { CallToAction, GetStartedButton } from "../components";
import { cardDetails } from "../constants/data";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className="card-deal">
      <CallToAction object={cardDetails[2]}>
        <GetStartedButton />
      </CallToAction>

      <figure className="card-deal__img-container">
        <img src={card} alt="Find the best card deal" />
      </figure>
    </section>
  );
};

export default CardDeal;
