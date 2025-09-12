// import React from "react";
// import { useUsers } from "../../hooks/useUser";
// import Button from "../../pieces/Button/ButtonSimple";
// import vite from '/vite.svg'

// const Users: React.FC = () => {
// const { users, loading, error } = useUsers();

// if (loading) return <p>Loading users...</p>;
// if (error) return (
//   <p>
//     {error}

//   </p>
// );

// return (
//   <div>
//     <h2>Users List</h2>
//     <table>
//       <tr>
//         <th>ID</th>
//         <th>Username</th>
//         <th>Email</th>
//         <th>Phone</th>
//       </tr>
//       {users.map((u) => (
//         <tr key={u._id}>
//           <td></td>
//           <td>{u.username}</td>
//           <td>{u.email}</td>
//           <td>{u.phone}</td>
//         </tr>
//       ))}
//     </table>
//   </div>
// );
//   return (
//     <div>
//       <h3>INFORMATIQUE BUREAUTIQUE</h3>
//       <img src={vite} alt="" />
//       <p>Initiation en Informatique, utilisation de l'internet,ex...</p>
//       <li>1 mois</li>
//       <li>Max 50 etudiants</li>
//       <li>Certificat en Informatique bureautique</li>
//       <Button text="S'inscrire maintenant" />

//     </div>
//   );
// };

// export default Users;


import React, { useState } from "react";
import ButtonFormation from "../../pieces/Button/ButtonFormation";
import "./Form.scss";
import ListIcon from '../../pieces/List/index'

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


//List: React.FC<FormationProps> = ({ text, icon, onClick }) => {
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
      {/* <p>Veuillez reessayer!</p> */}
      <ButtonFormation text="S'inscrire maintenant" icon="fleche" />

    </div>
  );
};

export default Form;
