import Card from "../../components/Formation/index";
// import './Formation.scss'
// import type { ReactNode } from 'react';


const Formation = () => {
  return (
    <div className="Formation">
      <div className="FormationIntro">
        <h2>Nos Formations certifiantes</h2>
        <p>Choisissez parmi nos formations professionnelles conçues pour vous donner les compétences recherchées par les employeurs</p>
      </div>
      <div className="FormationDetails">
        <Card/>
      </div>
    </div>)
};

export default Formation;
