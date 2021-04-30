import React from "react";
import s from "./SideNav.module.css";
import {NavLink} from "react-router-dom";

const SideNav = () => {
    return <ul className={s.SideNav}>
<li className={s.SideNavLink}>
<NavLink
          to="/"
          exact
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Home
        </NavLink>

</li>
<li className={s.SideNavLink}>
<NavLink
          to="/movies"
          exact
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Movies
        </NavLink>

</li>
    </ul>
}

export default SideNav;