import "./styles/billing.scss";
import { bill, apple, google } from "../assets";
import { CallToAction } from "../components";
import { cardDetails } from "../constants/data";

const Billing = () => {
  return (
    <section className="billing">
      <figure className="billing__container">
        <img src={bill} alt="Payment with HooBank" />
      </figure>

      <CallToAction object={cardDetails[1]}>
        <figure className="billing__content">
          <img src={apple} alt="App Store" />
          <img src={google} alt="Google Play Store" />
        </figure>
      </CallToAction>
    </section>
  );
};

export default Billing;
