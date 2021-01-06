import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/footer/Footer.jsx";
import { Sponsors } from "../../components/Sponsors/Sponsors";

export const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
    <Sponsors />
    <Footer />
  </div>
);
