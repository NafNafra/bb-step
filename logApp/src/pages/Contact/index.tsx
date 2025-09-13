import React from "react";
import "./Contact.scss";
import ContactInfo from "../../components/Contact/CtInfo";
import ContactMessage from "../../components/Contact/Message";
import Panel from "../../components/Panel/CenterizedPanel";

const Contact: React.FC = () => {
  return (
    <div className="Contact">
      <Panel header="Contactez-nous" texte="Pret a debuter votre formation? Notre equipe vous accompagne a chaque etape pour concretiser votre projet professionnel." />
      <div className="ContactInfo">
        <ContactMessage />
        <div><ContactInfo /></div>
      </div>
    </div>
  );
}

export default Contact;