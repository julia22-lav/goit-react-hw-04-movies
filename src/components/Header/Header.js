import React from "react";
import SideNav from "./SideNav";
import s from "./Header.module.css";

const Header = () => {
    return <div className={s.Header}>
        <SideNav/>
    </div>
}

export default Header;