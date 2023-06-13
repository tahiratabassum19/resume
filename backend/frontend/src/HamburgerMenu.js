import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`hamburger-menu ${open ? "open" : ""}`}>
      <div className="menu-button" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      {open && (
        <div className={`menu-options ${open ? "open" : ""}`}>
        <div className="menu-option">🔑Login</div>
        <div className="menu-option">🔎Learn More</div>
        <div className="menu-option">💰Package Options</div>

        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
