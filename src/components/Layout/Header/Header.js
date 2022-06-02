import CartIcon from "../../Cart/CartIcon";
import ProfilePix from "../../Assests/images/image-avatar.png";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

import styling from './Header.module.css'; 

const Header = () => {
  return (
      <header className={styling.header}>
        <div className={styling.header_a}>
          <HeaderLogo />
          <HeaderNav />
        </div>
        <div className={styling.header_b}>
          <span><CartIcon /></span>
          <div role='img' aria-label="Profile picture">
            <img src={ProfilePix} alt="ProfilePix" />
          </div>
        </div>
      </header>
  );
};

export default Header;
