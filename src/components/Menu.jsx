import { navLinks } from "../constants/data";
import PropTypes from "prop-types";

const Menu = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        {navLinks.map((menuObj) => (
          <li key={menuObj.id}>
            <a href="#">{menuObj.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Menu;
