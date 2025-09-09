// import './styles/global.scss';

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello Global SCSS 🌍 </h1>
//     </div>
//   );
// }

// export default App;

import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/login">Utilisateurs login</Link></li>
      </ul>
    </nav>

  );
};

export default Nav;
