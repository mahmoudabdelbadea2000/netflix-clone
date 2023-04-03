import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { loggIn, loggOut } from "../features/userSlice";
import { useEffect } from "react";

const CheckUserSginIn = () => {
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsibscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          loggIn({
            userID: userAuth.uid,
            userEmail: userAuth.email,
          })
        );
      } else {
        dispatch(loggOut());
      }
    });
    return unsibscribe;
  }, [dispatch]);

  return [user];
};

export default CheckUserSginIn;
