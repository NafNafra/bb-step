import Card from "../../components/Formation/Card/index";
import './Formation.scss'
import Button from "../../pieces/Button/ButtonSimple";
import Panel from "../../components/Panel/CenterizedPanel";
import AssembledFormation from "../../components/Formation/Assemble";

const Formation = () => {

  return (
    <div className="Formation">
      <Panel header="Nos Formations certifiantes" texte="Choisissez parmi nos formations professionnelles conçues pour vous donner les compétences recherchées par les employeurs" />
      <div className="FDetails"> {/*titre, description, duree, place, certificat */}
        {/* {createCards()} */}
        <AssembledFormation />
      </div>
      <Button text="Voir toutes les formations" />

    </div>)
};

export default Formation;


// const title: string[] = ["INFORMATIQUE BUREAUTIQUE", "ASSISTANT COMPTABLE", "ANIMATECH"];
// const descrip: string[] = ["Initiation en Informatique, utilisation de l’internet, ex.... ", "Comptabilité Générale, Fiscalité, Comptabilité Informatisée", "Animateur, technicien"];
// const duration: string[] = [" 1 mois", " 2 Semaines (40h )", "1 Semaine"];
// const places: string[] = ["Max 50 etudiants", "Max 30 etudiants", "Max 25 etudiants"];
// const certification: string[] = ["Certification en informatique bureautique", "Certification", "Attestation"];
// const images: string[] = ["","",""]
// function createCards() {
//   return title.map((_, i) => (
//     <Card
//       key={i}
//       inform={{
//         titre: title[i],
//         description: descrip[i],
//         duree: duration[i],
//         place: places[i],
//         certificat: certification[i],
//       }}
//     />
//   ));
// }