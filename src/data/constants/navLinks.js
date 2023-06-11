import Dashboard from "components/Svg/Dashboard";
import Profile from "components/Svg/Profile";
import Products from "components/Svg/Products";
import SignUp from "components/Svg/SignUp";
import Inbox from "components/Svg/Inbox";
import Kana from "components/Svg/Kana";
import SignIn from "components/Svg/SignIn";

export const MENU_ITEMS = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    link: "#",
  },
  {
    title: "Kana",
    icon: <Kana />,
    link: "#",
    badge: "Pro",
  },
  {
    title: "Inbox",
    icon: <Inbox />,
    link: "#",
    badge: "3",
  },
  {
    title: "Profile",
    icon: <Profile />,
    link: "#",
  },
  {
    title: "Products",
    icon: <Products />,
    link: "#",
    badge: "5",
  },
  {
    title: "Sign In",
    icon: <SignIn />,
    link: "#",
  },
  {
    title: "Sign Up",
    icon: <SignUp />,
    link: "#",
  },
];
export default MENU_ITEMS;
