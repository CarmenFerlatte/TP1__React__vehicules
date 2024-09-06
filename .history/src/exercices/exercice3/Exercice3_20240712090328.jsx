import { useState } from "react";
import "../../css/exo3.css";
import Exo3HeaderNav from "./Exo3HeaderNav";
import Exo3HeaderBanner from "./Exo3HeaderBanner";
import listeVehicules from "./listeVehicules";

function Index() {
  const [vehicules, setVehicules] = useState(listeVehicules);
  const [vehiculeReserve, setVehiculeReserve] = useState(false);

  const reserverVehicule = (index) => {
    const nouveauVehicules = vehicules.map((vehicule, i) => {
      if (i === index) {
        vehicule.reserve = true;
      }
      return vehicule;
    });
    setVehicules(nouveauVehicules);
    setVehiculeReserve(true);
  };

  return (
    <div className="exo3">
      <Exo3HeaderNav /> {/* Utilisation du composant Exo3HeaderNav */}
      <Exo3HeaderBanner /> {/* Utilisation du composant Exo3HeaderBanner */}

      <h2>Liste des véhicules</h2>
      <h3>Vous pouvez réserver le véhicule de votre choix!</h3>
      <ul className="exo3-liste">
        {vehicules.map((vehicule, index) => (
          <li key={index} className="vehicule">
            <img src={vehicule.image} alt={vehicule.marque} />
            <p className="vehicule-marque">{vehicule.marque}</p>
            <p>Modèle: {vehicule.modele}</p>
            <p>Autonomie: {vehicule.autonomie} km</p>
            <p>État: {vehicule.etat}</p>
            <p>Prix : {vehicule.prix} $</p>
            <button
              className="btn-reserver"
              onClick={() => reserverVehicule(index)}
              disabled={vehiculeReserve || vehicule.reserve}
            >
              {vehicule.reserve ? "Réservé" : "Réserver"}
            </button>
          </li>
        ))}
      </ul>
      <div className="exo3-footer">
        <p>Réalisation par: Carmen Ferlatte</p>
      </div>
    </div>
  );
}

export default Index;
