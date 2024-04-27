import React from "react";
import Link from "next/link";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <nav className="header">
      <a className="logo" href="#">
        TimbleWise
      </a>
      <div className="menu">
        <form className="search-container" action="#">
          <input type="text" placeholder="Search.."></input>
          <button className="search-button" type="submit">
            {/* <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} /> */}
          </button>
        </form>
        <div className="nav-header">
          <a className="home" href="../home">
            Home
          </a>
          <a className="cart" href="#">
            {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
          </a>
          <a className="login" href="#">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
