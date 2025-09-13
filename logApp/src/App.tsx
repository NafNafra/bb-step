import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./components/Modal/LoginModal/Login";
import Formation from "./pages/Formation";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
