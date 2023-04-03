import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInHook = () => {
  const navigate = useNavigate();
  const [acountInfo, setAcountInfo] = useState({
    email: "",
    password: "",
  });
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, acountInfo.email, acountInfo.password)
      .then((userAuth) => {
        if (userAuth) {
          navigate("/homescreen");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const onChangeEmail = (e) => {
    setAcountInfo({ ...acountInfo, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setAcountInfo({ ...acountInfo, password: e.target.value });
  };

  return [acountInfo, onChangeEmail, onChangePassword, signIn];
};

export default SignInHook;
