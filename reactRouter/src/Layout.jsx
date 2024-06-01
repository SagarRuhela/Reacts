import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function Layout() {
    return(
<>
<Header/>
<Outlet/>
<Footer/>
</>
    )
}

export default Layout;