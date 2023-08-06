import { CallToAction, GetStartedButton, FeatureBlock } from "../components";
import { cardDetails, features } from "../constants/data";
import "./styles/business.scss";

const Business = () => {
  return (
    <section className="business">
      <CallToAction object={cardDetails[0]} className="business__content">
        <GetStartedButton />
      </CallToAction>

      <div className="business__feature">
        {features.map((feature) => (
          <FeatureBlock key={feature.id} object={feature}/>
        ))}
      </div>
    </section>
  );
};

export default Business;
