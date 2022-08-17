import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <React.Fragment>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </React.Fragment>
);

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className="gpt3--navbar">
      <div className="gpt3--navbar-links">
        <div className="gpt3--navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3--navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3--navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3--navbar-menu">
        {toogleMenu ? (
          <RiCloseLine
            color="#FFF"
            size={27}
            onClick={() => setToogleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#FFF"
            size={27}
            onClick={() => setToogleMenu(true)}
          />
        )}
        {toogleMenu && (
          <div className="gpt3--navbar-menu_container scale-up-center">
            <div className="gpt3--navbar-menu_container-links">
              <Menu />
              <div className="gpt3--navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
