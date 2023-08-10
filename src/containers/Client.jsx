import { clients } from "../constants/data";
import "./styles/clients.scss";

const extractName = (filePath) => {
  const regex = /\/([^/]+)\.png/;
  return filePath.match(regex)[1];
};

const Client = () => {
  return (
    <section className="clients">
      {clients.map((client) => (
        <figure key={client.id} className="clients__container">
          <img
            src={client.logo}
            alt={extractName(client.logo)}
            className="client"
          />
        </figure>
      ))}
    </section>
  );
};

export default Client;
