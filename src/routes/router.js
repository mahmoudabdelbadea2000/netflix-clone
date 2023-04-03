import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeScreen from "../pages/homeScreen/HomeScreen";
import SignInPage from "../pages/signIn/SignInPage";
import GetStartedPage from "../pages/getStarted/GetStartedPage";
import RegisterPage from "../pages/register/RegisterPage";
import ProfilePage from "../pages/profile/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <GetStartedPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/homescreen",
        element: <HomeScreen />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
