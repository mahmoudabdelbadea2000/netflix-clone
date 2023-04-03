import React from "react";
import "./SignInPage.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignInHook from "../../logic/signInHook";

const SignInPage = () => {
  const [acountInfo, onChangeEmail, onChangePassword, signIn] = SignInHook();

  return (
    <div className="loginPage">
      <Container>
        <div className="login__content">
          <h3>Sign In</h3>
          <form>
            <input
              value={acountInfo.email}
              onChange={onChangeEmail}
              type="email"
              placeholder="Email or phone number"
            />
            <input
              value={acountInfo.password}
              onChange={onChangePassword}
              type="password"
              placeholder="password"
            />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>
            <p>
              New to Netflix?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span>Sign up now.</span>
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignInPage;
