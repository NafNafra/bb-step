import './Apropos.scss'
import List from '../../pieces/List';
import Button from '../../pieces/Button/ButtonIcon';

const Apropos = () => {

  return (
    <div className="Apropos">
      <div className='AproposIntro'>
        <h1>Pourquoi choisir Fihary Soft?</h1>
        <p>Depuis plus de 6 ans, Fihary Soft accompagne les professionnels et etudiants dans leur developpement de competences. Notre approche combine expertise technique, pedagogique moderne et accompagnement personnalise.</p>
      </div>
      <div className='AproposContent'>
        <div className='AproposFormation'>
          <div>
            <h2><List text="Formateur certifiantes" icon='choix'/></h2>
            <p>Experts reconnus dans leur domaine</p>
          </div>
          <div>
            <h2><List text="Equipements Modernes" icon='choix'/></h2>
            <p>Salle equipees des dernieres technologies</p>
          </div>
        </div>
        <div className='AproposChoisir'>
          <div className='AproposChoix'><Button icon='like' classes='icon'/><h3>Excellence Pedagogique</h3><p>Des formateurs experts avec une approche personnalise pour chaque apprenant.</p></div>
          <div className='AproposChoix'><Button icon='accompagnement' classes='icon'/><h3>Accompagnement Humain</h3><p>Un suivi individualise tout au long de votre parcours de formation.</p></div>
          <div className='AproposChoix'><Button icon='innovation' classes='icon'/><h3>Innovation Continue</h3><p>Des Programmes actualises selon les dernieres tendances du marche</p></div>
          <div className='AproposChoix'><Button icon='insertion' classes='icon'/><h3>Insertion Professionnelle</h3><p>Trois etudiants sur quatre decrochent un emploi dans les six mois apres leur formation.</p></div>
        </div>
      </div>
    </div>)
};

export default Apropos;
