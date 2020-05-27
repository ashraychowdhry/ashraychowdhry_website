import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink className="btn btn-primary" to="/">
        Home
      </NavLink>{" "}
      |{" "}
      <Link className="btn btn-primary" to="/about">
        About
      </Link>
    </nav>
  );
}

export default Header;
