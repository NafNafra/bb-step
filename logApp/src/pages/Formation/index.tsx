import Card from "../../components/Formation/index";
import './Formation.scss'
// import type { ReactNode } from 'react';


const Formation = () => {
  const title: string[] = ["INFORMATIQUE BUREAUTIQUE", "ASSISTANT COMPTABLE", "ANIMATECH"];
  const descrip: string[] = ["Initiation en Informatique, utilisation de l’internet, ex.... ", "Comptabilité Générale, Fiscalité, Comptabilité Informatisée", "Animateur, technicien"];
  const duration: string[] = [" 1 mois", " 2 Semaines (40h )", "1 Semaine"];
  const places: string[] = ["Max 50 etudiants", "Max 30 etudiants", "Max 25 etudiants"];
  const certification: string[] = ["Certification en informatique bureautique", "Certification", "Attestation"];

  function createCards() {
    return title.map((_, i) => (
      <Card
        key={i}
        inform={{
          titre: title[i],
          description: descrip[i],
          duree: duration[i],
          place: places[i],
          certificat: certification[i],
        }}
      />
    ));
  }
  return (
    <div className="Formation">
      <div className="FIntro">
        <h2>Nos Formations certifiantes</h2>
        <p>Choisissez parmi nos formations professionnelles conçues pour vous donner les compétences recherchées par les employeurs</p>
      </div>
      <div className="FDetails"> {/*titre, description, duree, place, certificat */}
        {createCards()}
        {/* <Card inform={{ titre: title[0], description: "svdjhs", duree: "bdjs", place: "asbda", certificat: "sdnfs" }} /> */}
      </div>
    </div>)
};

export default Formation;
