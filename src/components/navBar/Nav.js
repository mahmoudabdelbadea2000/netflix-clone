import React, { useEffect, useState } from "react";
import netflixLogo from "../../image/netflix-logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import CheckUserSginIn from "../../logic/checkUserSginIn";

const Nav = () => {
  const [user] = CheckUserSginIn();
  const [show, setHandleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setHandleShow(true);
    } else {
      setHandleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <Link to="/">
          <img className="nav__logo" src={netflixLogo} alt="netflix logo" />
        </Link>
        {user ? (
          <Link to="/profile">
            <img
              className="nav__avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="netflix avatar"
            />
          </Link>
        ) : (
          <Link to="/signin">
            <button className="nav__sign">sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
