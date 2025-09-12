
import { Link } from "react-router-dom";
import userImage from "../../assets/images/user-image.png";
import fsLogo from "../../assets/images/fs-logo.png"
import './Nav.scss';
import IconButton from "../../pieces/Button/ButtonIcon";
import NavButton from "../../pieces/Button/ButtonNav";
import  NotifyIcon  from "../../assets/icons/NotificyIcon.svg";
// import icon from '../../assets/icons/icon.svg';

const Nav: React.FC = () => {
  return (
    <nav className="Nav">
      <span className="logo">
        <img src={fsLogo} />
        <strong><b>Fihary Soft</b></strong>
      </span>
      {/* <ul className="ul"> */}
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/">Formation</Link></li>
      <li><Link to="/">A propos</Link></li>
      <li><Link to="/">Contact</Link></li>
      <li><Link to="/login">Profile</Link></li>
      {/* </ul> */}
      <span className="Nav-profile">
        <IconButton><img src={NotifyIcon} /></IconButton>
        <img src={userImage} />
        {/* <img src={icon} /> */}
        {/* <svg className="icon">
          <use href="/icons.svg#etudiants"></use>
        </svg> */}
        <NavButton text="Se connecter" />
      </span>
    </nav>

  );
};

export default Nav;
