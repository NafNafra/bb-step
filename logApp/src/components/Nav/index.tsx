
import { Link } from "react-router-dom";
import userImage from "../../assets/images/user-image.png";
import fsLogo from "../../assets/images/fs-logo.png"
import './Nav.scss';
import IconButton from "../../pieces/Button/ButtonIcon";

const Nav: React.FC = () => {
  return (
    <nav className="Nav">
      <span className="logo">
        <img src={fsLogo} />
        <strong><b>Fihary Soft</b></strong>
      </span>
      <>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/formation">Formation</Link></li>
        <li><Link to="/apropos">A propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </>
      <span className="Nav-profile">
        <IconButton classes="" icon="notify"/>
        <Link to="/login"><img src={userImage} /></Link>
        <IconButton classes="ham" icon="ham"/>
      </span>
    </nav>

  );
};

export default Nav;
