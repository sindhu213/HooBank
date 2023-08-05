import { stats } from "../constants/data";
import { StatsCard } from "../components";
import "./styles/stats.scss"

const Stats = () => {
  return (
    <section className="stats-component">
      {stats.map((props) => (
        <StatsCard key={props.id} object={props} />
      ))}
    </section>
  );
};

export default Stats;
