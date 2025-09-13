import React, { useState } from "react";
import ButtonFormation from "../../../pieces/Button/ButtonFormation";
import "./Form.scss";
import ListIcon from '../../../pieces/List/index'

interface FormDetail {
  titre: string;
  description: string;
  duree: string;
  place: string;
  certificat: string;
}

interface FormProps {
  inform: FormDetail;
}

const Form: React.FC<FormProps> = ({ inform }) => { //titre, description, duree, place, certificat
  return (
    <div className="Form">

      <h3>{inform.titre}</h3>
      <div className="FormationImage"></div>
      <div className="FormationInfo">
        <p>{inform.description}</p>
        <ListIcon text={inform.duree} icon="duree" />
        <ListIcon text={inform.place} icon="place" />
        <ListIcon text={inform.certificat} icon="certificat" />
      </div>
      <ButtonFormation text="S'inscrire maintenant" icon="fleche" />
    </div>
  );
};

export default Form;
