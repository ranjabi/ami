import { Homepage } from "../Pages/Homepage/Homepage";
import { Organogram } from "../Pages/Organogram/Organogram";

export const routes = [
  {
    label: "Home",
    path: "/",
    component: Homepage,
    afterLoggedIn: false,
  },
  {
    label: "Organogram",
    path: "/organogram",
    component: Organogram,
    afterLoggedIn: false,
  },
];
