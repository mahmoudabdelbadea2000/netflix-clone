import React from "react";
import "./GetStartedPage.css";
import { Link } from "react-router-dom";

const GetStartedPage = () => {
  return (
    <div className="getStarted">
      <div className="getStarted__content">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <p>Plans now start at EGP70/month.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form>
          <input type="email" className="" placeholder="Email address" />
          <Link to="/signin">
            <button>
              Get started <i className="fa-solid fa-chevron-right"></i>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default GetStartedPage;
