import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [acountInfo, setAcountInfo] = useState({
    email: "",
    password: "",
  });
  const onChangeEmail = (e) => {
    setAcountInfo({ ...acountInfo, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setAcountInfo({ ...acountInfo, password: e.target.value });
  };
  const register = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(
      auth,
      acountInfo.email,
      acountInfo.password
    )
      .then((authUser) => {
        if (authUser) {
          navigate("/homescreen");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/signin");
  };

  return [acountInfo, onChangeEmail, onChangePassword, register];
}

export default Register;
