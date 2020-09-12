import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header className="Menu">
      <Link id="logo" to="/Home">
        <h3>FLUXUS</h3>
      </Link>

      <nav>
        <Link className="nav-links" to="/about">
          <ul>
            <li>About</li>
          </ul>
        </Link>
      </nav>
    </header>
  );
};

export default Menu;
