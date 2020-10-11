import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/footer/Footer.jsx";

export const Layout = (props) =>(
    <div>
        <Navbar/>
        {props.children}
        <Footer/>
    </div>
)