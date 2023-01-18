import React from "react";
import { useState } from "react";
import "./navbar.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <nav>
      <a href="/html/">Home</a>
      <a href="/css/">What is ScriptAI ?</a>
      <a href="/js/">OpenAI</a>
      <a href="/python/">Case Studies</a>
      <a href="/python/">Library</a>
    </nav>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="scriptai__navbar">
      <div className="scriptai__navbar-links">
        <div className="script__ai-links_logo">
          <img src={logo} alt="logo" srcset="" />
        </div>
        <div className="scriptai__links">
          <Menu />
        </div>
      </div>

      <div className="scriptai__navbar-buttons">
        <div className="scriptai__navbar-buttons-signin">
          <button>Sign In</button>
        </div>
        <div className="scriptai__navbar-buttons-signup">
          <button>Sign Up</button>
        </div>
      </div>
      <div className="scriptai-menu">
        {toggleMenu ? (
          <RiCloseLine
            size={20}
            color="#fff"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="scriptai__hamburger-menu">
            <Menu />
            <div className="scriptai__navbar-buttons-signin">
          <button>Sign In</button>
        </div>
        <div className="scriptai__navbar-buttons-signup">
          <button>Sign Up</button>
        </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
