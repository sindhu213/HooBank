import { useState } from "react";
import { logo, close, menu } from "../assets";
import "./styles/navbar.scss";
import { Menu } from "../components";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="navbar">
        <img src={logo} alt="HooBank logo" />

        {/* Desktop Menu */}
        <Menu className="navbar__list" />

        {/* Mobile Menu */}
        <img
          src={toggle ? close : menu}
          className="navigation-icon"
          onClick={() => setToggle((state) => !state)}
        />
        {toggle && <Menu className="navbar__list--mobile" />}
      </header>
    </>
  );
};

export default Navbar;
