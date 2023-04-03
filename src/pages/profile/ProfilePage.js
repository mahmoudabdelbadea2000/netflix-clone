import React from "react";
import "./ProfilePage.css";
import CheckUserSginIn from "../../logic/checkUserSginIn";
import { Container } from "react-bootstrap";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user] = CheckUserSginIn();
  return (
    <div className="profilePage">
      <Container
        fluid
        className="d-flex justify-content-center align-content-center"
      >
        <div className="profile__content mw-100">
          <h2>Edit Profile</h2>
          <div className="profile__info">
            <img
              className="profile__avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="netflix avatar"
            />
            <div className="profile__text">
              <p className="profile__email">{user?.userEmail}</p>
              <p>plans (current Plan: Premium)</p>
              <hr />
              <p>Renewal date: 20/3/2023</p>
              <div className="profile__plans">
                <div className="profile__plan">
                  <p>
                    netflix standard <br /> 1080p
                  </p>
                  <buttun type="text" className="profile__buttons">
                    subscribe
                  </buttun>
                </div>
                <div className="profile__plan">
                  <p>
                    netflix Basic <br /> 480p
                  </p>
                  <buttun type="text" className="profile__buttons">
                    subscribe
                  </buttun>
                </div>
                <div className="profile__plan">
                  <p>
                    netflix Premium <br /> 4K
                  </p>
                  <buttun type="text" className="profile__buttons">
                    subscribe
                  </buttun>
                </div>
                <buttun
                  type="text"
                  className="profile__signOut"
                  onClick={() => {
                    signOut(auth);
                    navigate("/");
                  }}
                >
                  Sign out
                </buttun>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
