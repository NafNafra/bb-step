import fsLogo from "../../assets/images/fs-logo.png";
import ListIcon from "../../pieces/List";
import { PhoneIcon } from "../../assets/icons/PhoneIcon";
import { LocationIcon } from "../../assets/icons/LocationIcon";
import { EmailIcon } from "../../assets/icons/EmailIcon";
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="Footer">
      <div>
        <span className="logo">
          <img src={fsLogo} />
          <h2>Fihary Soft</h2>
        </span>
        <p>
          Fihary Soft est une societe qui se specialise dans le domaine informatique depuis 2009. S'engageant a propager le TIC dans tous les domaines
        </p>
      </div>
      <div>
        <h3>Formations</h3>
        <ul>
          <li>Informatique Bureautique</li>
          <li>Assistant comptable</li>
          <li>Maintenance Informatique</li>
          <li>Excel Internet</li>
          <li>Excel Avance</li>
          <li>Animatech</li>
          <li>Internet Pro</li>
        </ul>
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          <li> Formation</li>
          <li> Impression</li>
          <li> Vente</li>
          <li>Dev</li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul className="contact">
          <ListIcon>
            <LocationIcon />
            <span>Ivory Atsimo, Fianarantsoa</span>
          </ListIcon>
          <ListIcon>
            <PhoneIcon />
            <span>034 19 863 66</span>
          </ListIcon>
          <ListIcon>
            <EmailIcon />
            <span>fiharysoft@gmail.com</span>
          </ListIcon>
        </ul>
      </div>
    </footer>
  );
}
