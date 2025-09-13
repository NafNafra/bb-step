import React from "react";
import './Message.scss';
import Input   from "../../../pieces/Input/Input";
import TextArea from "../../../pieces/TextArea"
import Button from "../../../pieces/Button/ButtonSimple";

const Message: React.FC = () => {
  return (
    <div className="Message">
      <h3>Envoyez-nous un message</h3>
      <Input type="text" placeholder="Nom" value="" />
      <Input type="text" placeholder="Telephone" value="" />
      <TextArea placeholder="Votre message" value=""/>
      <Button text="Envoyer le message" />

    </div>
  );
}

export default Message;
