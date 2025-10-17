import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import FooterPart from "../Footer/Footer";

export default function Layout() {
    return <>
        <Header />
        <Outlet />
        <FooterPart />
    </>
}