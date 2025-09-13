import React from "react";
import './CInfo.scss'
const icon: string[] = ["location", "phone", "email"];
const titre: string[] = ["Adresse", "Telephone", "Email"];
const texte: string[] = ["Ivory Atsimo Fianarantsoa, Madagascar", "034 19 863 66", "fiharysoft@gmail.com"]


const ContactInfo: React.FC = () => {


  return (
    <>
      {icon.map((iconName, i) => (
        <div key={i} className="CInfo">
          <div className="CIIcon">
            <button className={iconName}></button>
          </div>
          <div className="CIDetails">
            <h3>{titre[i]}</h3>
            <p>{texte[i]}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContactInfo;