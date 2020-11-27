import { MainCompetition } from "../Pages/Competition/MainCompetition";
import { Homepage } from "../Pages/Homepage/Homepage";
// import { Organogram } from "../Pages/Organogram/Organogram";

import YukVisualkanImg from "../images/yuk-visualkan.png";
import CheckTheMissionImg from "../images/check-the-mission.png";
import KomikKarikaturImg from "../images/komik-karikatur.png";
import MusikalisasiPuisiImg from "../images/musikalisasi-puisi.png";

export const routes = [
  {
    label: "Home",
    path: "/",
    component: Homepage,
    afterLoggedIn: false,
  },
  // {
  //   label: "Organogram",
  //   path: "/organogram",
  //   component: Organogram,
  //   afterLoggedIn: false,
  // },
  {
    label: "Lomba",
    path: "/lomba",
    component: MainCompetition,
    afterLoggedIn: false,
  },
];

export const competitionRoutes = [
  {
    label: "Yuk Visualkan",
    image: YukVisualkanImg,
    path: "/yuk-visualkan",
  },
  {
    label: "Check the Mission",
    image: CheckTheMissionImg,
    path: "/check-the-mission",
  },
  {
    label: "Komik Karikatur",
    image: KomikKarikaturImg,
    path: "/komik-karikatur",
  },
  {
    label: "Musikalisasi Puisi",
    image: MusikalisasiPuisiImg,
    path: "/musikalisasi-puisi",
  },
];
