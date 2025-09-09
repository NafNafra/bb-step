
import { Link } from "react-router-dom";
import userImage from "../../assets/user-image.png";
import './Nav.scss'


const Nav: React.FC = () => {
  return (
    <nav className="Nav">
      <span className="logo">
        <img src={userImage} />
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
        <button>Notify</button>
        <img src={userImage} />
        <button>Inscription</button>
      </span>
    </nav>

  );
};

export default Nav;
