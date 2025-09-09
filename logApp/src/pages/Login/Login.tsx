import React, { useState } from "react";
import { useAuth } from "../../hooks/useLogin";
import Input from "../../pieces/Input/Input";
import Button from "../../pieces/Button/Button";
import Checkbox from "../../pieces/CheckBox/Checkbox";
import Paragraph from "../../pieces/Paragraph/Paragraph";
import Link from "../../pieces/Link/Link";
import "./Login.scss";
import Header from "../../pieces/Header/Header";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [remember, setRemember] = useState(false);
  const { login: loginUser, loading, error } = useAuth();

  const handleLogin = async () => {

    const result = await loginUser(email, phone);
    if (result!==null) {
      const userCust = localStorage.getItem("user");
      if (userCust !== null) {
        const dataUsername = JSON.parse(userCust)
        alert(`Hello, ${dataUsername.username}`)
      } else {
        alert(`Bad email or phone number`)
      }
    }
    else {
      alert("Error " )
    }
  };

  return (
    <div className="Login">
      <div className="Login-left">

      </div>

      <div className="Login-right">
        <Header title='Holla, welcome back' />
        <Paragraph>
          Hey, welcome back to your special place
        </Paragraph>

        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <div className="Login-options">
          <Paragraph>
            <Checkbox label="Remember me" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <Link text="No phone number?" />
          </Paragraph>
        </div>

        <Button text="Sign In" onClick={handleLogin} />

      </div>
    </div>
  );
};

export default Login;
