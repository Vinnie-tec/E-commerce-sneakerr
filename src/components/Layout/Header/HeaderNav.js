import React from "react";

import styling from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <div role="navigation" className={styling.navs} aria-label="navigation">
      <nav className={styling.nav}>
        <li>
          <a href="/#">Collections</a>
        </li>
        <li>
          <a href="/#">Men</a>
        </li>
        <li>
          <a href="/#">Women</a>
        </li>
        <li>
          <a href="/#">About</a>
        </li>
        <li>
          <a href="/#">Contact</a>
        </li>
      </nav>
    </div>
  );
};

export default HeaderNav;
