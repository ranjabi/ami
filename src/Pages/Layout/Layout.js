import React from "react";
import { NavbarMain } from "../../components/Navbar/NavbarMain";
import { Footer } from "../../components/footer/Footer.jsx";
import { Sponsors } from "../../components/Sponsors/Sponsors";

export const Layout = (props) => (
  <div>
    <NavbarMain />
    {props.children}
    <Sponsors />
    <Footer />
  </div>
);
