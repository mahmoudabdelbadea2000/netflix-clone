import React from "react";
import "./RegisterPage.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Register from "../../logic/register";

const RegisterPage = () => {
  const [acountInfo, onChangeEmail, onChangePassword, register] = Register();
  return (
    <div className="registerPage">
      <Container>
        <div className="register__content">
          <h3>Register</h3>
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
            <button type="submit" onClick={register}>
              register
            </button>
            <p>
              do you have an email?{" "}
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <span>Sign in</span>
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
