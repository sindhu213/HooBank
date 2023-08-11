import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/data";
import "./styles/footer.scss";

const Footer = () => {
  return (
    <section className="main-container">
      <section className="footer-grid">
        <div className="footer-component">
          <img src={logo} alt="HooBank" />
          <p> A new way to make the payments easy, reliable and secure.</p>
        </div>

        {footerLinks.map((section) => (
          <div key={section.id} className="footer-component">
            <ul key={section.id}>
              {section.title}
              {section.links.map((unit) => (
                <li key={unit.key}>
                  <a href="">{unit.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-component">
          <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
          <div className="footer-icons">
            {socialMedia.map((unit) => (
              <img key={unit.id} src={unit.icon} alt="Social Media" />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
