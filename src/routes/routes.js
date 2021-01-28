import { MainCompetition } from "../Pages/Competition/MainCompetition";
import { Homepage } from "../Pages/Homepage/Homepage";
import { MainCerita } from "../Pages/CeritaInspiratif/MainCerita";
// import { Eksibisi } from "../Pages/Eksibisi/Eksibisi";
import { MenyusunKata } from "../Pages/Game/MenyusunKata";
// import { StartGame } from "../Pages/Game/Start";
import { Final } from "../Pages/Game/Final";
import { Peta } from "../Pages/Game/Peta";
import { Finish } from "../Pages/Game/Finish";
import { KomikKarikatur } from "../Pages/KomikKarikatur/KomikKarikatur";
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
    afterLoggedIn: false,
  },
  // {
  //   label: "Eksibisi",
  //   path: "/eksibisi",
  //   component: Eksibisi,
  //   afterLoggedIn: false
  // },
  // {
  //   label: "Games",
  //   path: "/games/",
  //   component: StartGame,
  //   afterLoggedIn: false
  // },
  {
    label: "Komik Karikatur",
    path: "/komikkarikatur/",
    component: KomikKarikatur,
    afterLoggedIn: false
  },
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

export const gamesRoutes = [
  {
    label: "Menyusun Kata",
    path: "/games/menyusun-kata",
    component: MenyusunKata,
  },
  {
    label: "Pos 5",
    path: "/games/final",
    component: Final,
  },
  {
    label: "Peta",
    path: "/games/peta",
    component: Peta,
  },
  {
    label: "Finish",
    path: "/games/finish",
    component: Finish,
  }
]

export const petaComponent = Peta;
export const petaRoutes = [
  {
    name: "Labtek VII & VIII",
    dpath: "M92.005,874.663l-19.333-18l2-26l30.667-0.667l10.667-10.667l16-2.666l-0.667-157.334h90l-17.333,24.667l2.667,5.333h80l-14.667,22.667l10.667,18l21.333,10.667l25.334,26.666h-10.667l-2,6.667l26,24.667h-9.333l-8.667,11.333l2,7.333l-2.667,6.667l18.667-7.333l21.333,16.666h6.667l15.333,20.667l-22.666,14.667l-37.334,3.333l-6.666,3.333l10,8l-23.334,18.667l18.667,8.667l-2.667,4.666h-23.333l-6,2.667l2,16l-36,10.667h-45.333l-56-4.667l-50.667,0.667v10.666l-8.667,4.667l-22.667-3.333l-25.333-0.667l16.667-14l-13.333-13.333v-9.334l13.664-17.667l27.669-5.666",
    path: "/games/peta/1"
  },
  {
    name: "Labtek V & VI",
    dpath: "M669.67,800.328l11.333,2l0.667,18.667l23.333,3.333l6,2.667l-2,7.333l2.667,7.334l-13.406,0.825l5.406,11.175l8.666,21.333l56,7.333l-16.666,23.334l16.666,8.666h-8l-16.666-0.666l-10,5.333v16l-30,10l-47.334,3.333l-43.333-4.666l-38.667-3.334l-24.666,2l0.666,8.667l-14,8l-26.666-6.667l-18.667,3.668l0.667-7.668l16-13.333l-14-14.667l2.666-10l4-21.333l-24.666-20.667l-33.334-14.666l-26-8.667v-16.667l60.667-6.666l0.667-14l-10-6.667l-8-3.333l25.333-22.667l-2-7.333h-9.333l22-24l22-11.334l12.666-21.333l-16-22h82l1.334-3.333l-16-26.333h88.666L669.67,800.328z",
    path: "/games/peta/2"
  },
  {
    name: "PLN",
    dpath: "M523.001,422.333L692,385l23.001,18.667l42.667,76l-36,20.667l21.333,69.333h22l7.334,8.667h11.333h14.667l-21.334,16.868h12.667l18.667,6.465L825.668,613l-4.667,9.333l-11.333,10l-40,16l-2,8.667l-12.667,14l-21.333,9.333L696.335,689h-25.334l-1.333-28.669l-88.667,2l8,8.667L569.668,689h-63.333l-28-24.669l-3.334-21.333l-6.666-10l-4.667-10l-6-13.999l18.667-18l35.146-3.861l-11.813-7.473l1.333-10.667l-25.333-11.333l-33.333,1.333l12.666-48.666l45.334-15.333L523.001,422.333z",
    path: "/games/peta/3"
  },
  {
    name: "TVST",
    dpath: "M266,410l16,11l20,84l4,14h9l12,50l-18,5l9,5l13,1l29,11l-23,20v17l-5,57l-28,11l-44-7l-28-10l-15-14l8-5l-7-8h-15l-10-10l-24-2l-47,1l-40-4l-5,8l-19,7l-14-8H13l20-14l-10-13v-28l17-72l17-6v-8l11-16l-11-5l15-93l21-13",
    path: "/games/peta/4"
  },
  {
    name: "Sabuga",
    dpath: "M446,138l5,9l8,8l69-7l36,93l21-2l13-9l16-6l16-7l23,1l28,41l11,24.5l-6,39.5l-39-5v41l13,2v13l-19,7l-23,2l-28,7l-57,8v8l-21,7l-49,7l-111-5l-5,14l-56.5-6l15.5-14l-50-7l-32-16l-50-18v-37h73v-8h8l5-86h9v15h7v-37h15v37h8l6-43h25h19v-43l58-13v-15H446z",
    path: "/games/peta/5",
  },
]
