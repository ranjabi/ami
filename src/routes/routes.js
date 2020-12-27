import { MainCompetition } from "../Pages/Competition/MainCompetition";
import { Homepage } from "../Pages/Homepage/Homepage";
import { MainCerita } from "../Pages/CeritaInspiratif/MainCerita";
// import { Organogram } from "../Pages/Organogram/Organogram";

import YukVisualkanImg from "../images/yuk-visualkan.png";
import CheckTheMissionImg from "../images/check-the-mission.png";
import KomikKarikaturImg from "../images/komik-karikatur.png";
import MusikalisasiPuisiImg from "../images/musikalisasi-puisi.png";
import { CompetitionPage } from "../Pages/Competition/CompetitionPage";

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
  {
    label: "Cerita Inspiratif",
    path: "/cerita",
    component: MainCerita,
    afterLoggedIn: false
  }
];

export const competitionRoutes = [
  {
    label: "Yuk Visualkan!",
    image: YukVisualkanImg,
    path: "/lomba/yuk-visualkan",
    component: CompetitionPage,
  },
  {
    label: "Check the Mission",
    image: CheckTheMissionImg,
    path: "/lomba/check-the-mission",
    component: CompetitionPage,
  },
  {
    label: "Komik Karikatur",
    image: KomikKarikaturImg,
    path: "/lomba/komik-karikatur",
    component: CompetitionPage,
  },
  {
    label: "Musikalisasi Puisi",
    image: MusikalisasiPuisiImg,
    path: "/lomba/musikalisasi-puisi",
    component: CompetitionPage,
  },
];

export const ceritaInpiratifRoutes = [
  {
    
  },
];