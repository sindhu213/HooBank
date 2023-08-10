import { CallToAction, GetStartedButton } from "../components";
import { cardDetails } from "../constants/data";
import "./styles/service_trial.scss";

const ServiceTrial = () => {
  return (
    <section className="service">
      <div className="service__cta">
        <CallToAction object={cardDetails[3]} />
      </div>
      <div className="service__getStarted">
        <GetStartedButton />
      </div>
    </section>
  );
};

export default ServiceTrial;
