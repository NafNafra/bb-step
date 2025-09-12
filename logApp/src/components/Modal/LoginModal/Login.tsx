import React, { useState } from "react";
import { useAuth } from "../../../hooks/useLogin";
import Input from "../../../pieces/Input/Input";
import Button from "../../../pieces/Button/ButtonSimple";
import "./Login.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [remember, setRemember] = useState(false);
  const { login: loginUser, loading, error } = useAuth();

  const handleLogin = async () => {

    const result = await loginUser(email, phone);
    if (result !== null) {
      const userCust = localStorage.getItem("user");
      if (userCust !== null) {
        const dataUsername = JSON.parse(userCust)
        alert(`Hello, ${dataUsername.username}`)
      } else {
        alert(`Bad email or phone number`)
      }
    }
    else {
      alert("Error ")
    }
  };

  return (
    <div className="Login">

      <h2>Ajouter le numero</h2>
      <p className="LoginInstruction">Veuiller ajouter votre numero de telephone enregistre chez Fihary Soft</p>

      <Input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <p className="alert">Veuillez reessayer!</p>
      <Button text="Ajouter le numero" onClick={handleLogin} />
      <p className="LoginInstruction">Nous utilisons voter numero pour vous envoyer une code de confirmation par message</p>

    </div>
  );
};

export default Login;
