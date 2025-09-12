
import { Link } from "react-router-dom";
import userImage from "../../assets/images/user-image.png";
import fsLogo from "../../assets/images/fs-logo.png"
import './Nav.scss';
import IconButton from "../../pieces/Button/ButtonIcon";
import NavButton from "../../pieces/Button/ButtonNav";
import NotifyIcon from "../../../public/NotifyIcon.svg";
import HamIcon from "../../../public/burger-menu-svgrepo-com.svg";
// import icon from '../../assets/icons/icon.svg';

const Nav: React.FC = () => {
  return (
    <nav className="Nav">
      <span className="logo">
        <img src={fsLogo} />
        <strong><b>Fihary Soft</b></strong>
      </span>
      <>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Formation">Formation</Link></li>
        <li><Link to="/">A propos</Link></li>
        <li><Link to="/">Contact</Link></li>
      </>
      <span className="Nav-profile">
        <IconButton><img className="notify" src={NotifyIcon} /></IconButton>
        <Link to="/login"><img src={userImage} /></Link>

        <img className="ham" src={HamIcon} />
        {/* <NavButton text="Se connecter" /> */}
      </span>
    </nav>

  );
};

export default Nav;
