
import { Link } from "react-router-dom";
import userImage from "../../assets/images/user-image.png";
import fsLogo from "../../assets/images/fs-logo.png"
import './Nav.scss';
import IconButton from "../../pieces/Button/Button-Icon";
import NavButton from "../../pieces/Button/Button-Nav";
import IconNotification from "../../assets/images/notification.jpg"
import { NotifyIcon } from "../../assets/icons/NotificyIcon";
 

const Nav: React.FC = () => {
  return (
    <nav className="Nav">
      <span className="logo">
        <img src={fsLogo} />
        <strong><b>Fihary Soft</b></strong>
      </span>
      <ul className="ul">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/">Formation</Link></li>
        <li><Link to="/">A propos</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/login">Profile</Link></li>
      </ul>
      <span className="Nav-profile">
        <IconButton><NotifyIcon/></IconButton>
        <img src={userImage} />
        <NavButton text="Se connecter"/>
      </span>
    </nav>

  );
};

export default Nav;
