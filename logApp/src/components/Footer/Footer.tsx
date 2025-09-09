import userImage from "../../assets/user-image.png";
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="Footer">
      <div>
        <span className="logo">
          <img src={userImage} />
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
        <ul>
          <li> Ivory Atsimo, Fianarantsoa</li>
          <li> 034 19 863 66</li>
          <li> fiharysoft@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
}
