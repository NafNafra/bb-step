import Card from '../Card/index'

const AssembledFormation = () => {
  const title: string[] = ["INFORMATIQUE BUREAUTIQUE", "ASSISTANT COMPTABLE", "ANIMATECH"];
  const descrip: string[] = ["Initiation en Informatique, utilisation de l’internet, ex.... ", "Comptabilité Générale, Fiscalité, Comptabilité Informatisée", "Animateur, technicien"];
  const duration: string[] = [" 1 mois", " 2 Semaines (40h )", "1 Semaine"];
  const places: string[] = ["Max 50 etudiants", "Max 30 etudiants", "Max 25 etudiants"];
  const certification: string[] = ["Certification en informatique bureautique", "Certification", "Attestation"];
  const images: string[] = ["", "", ""]

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
    <>{createCards()}</>
  )
};

export default AssembledFormation;
