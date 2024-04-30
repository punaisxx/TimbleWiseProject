import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  var isDisabled=true;
  return (
    <nav className="header bg-orange-100		">
      <a className="logo" href="#">
        TimbleWise
      </a>
      <div className="menu">
        <form className="search-container" action="#">
          <input type="text" placeholder="Search.."></input>
          <button className="search-button" type="submit">
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="nav-header">
          <a className="home" href="http://localhost:3000/home">
            Home
          </a>
          <a className="cart" href="http://localhost:3000/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
          <a className="login" href="http://localhost:3000/signin">
            Login
          </a>
          <a className="login ml-2" href="http://localhost:3000/signup">
            Register
          </a>
          <a className="bg-red-500 text-white rounded-md px-4 py-2 no-underline inline-block text-center ml-2" href="http://localhost:3000/signin">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
