
import { Link } from "react-router-dom";
import userImage from "../../assets/user-image.png";
import fsLogo from "../../assets/fs-logo.png"
import './Nav.scss';
import IconButton from "../../pieces/Button/Button-Icon";
import IconNotification from "../../assets/notification.jpg"
 

const Nav: React.FC = () => {
  return (
    <nav className="Nav">
      <span className="logo">
        <img src={fsLogo} />
        <h2>Fihary Soft</h2>
      </span>
      <ul className="ul">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/">Formation</Link></li>
        <li><Link to="/">A propos</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/login">Profile</Link></li>
      </ul>
      <span className="profile">
        <IconButton><img src={IconNotification}/></IconButton>
        <img src={userImage} />
        <button>Inscription</button>
      </span>
    </nav>

  );
};

export default Nav;
