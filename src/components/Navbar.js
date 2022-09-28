import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
//Styles
import "./Navbar.css";

import React from "react";
import Searchbar from "./Searchbar";

export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="navbar__brand">
          <h1>GiaBaoLai</h1>
        </Link>
        <Searchbar />
        <Link to="/create" className="navbar__link">
          Create Recipe
        </Link>
      </nav>
    </div>
  );
}
