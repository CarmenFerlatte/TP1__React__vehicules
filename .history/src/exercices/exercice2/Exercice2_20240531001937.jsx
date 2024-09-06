import { useState } from "react";
import "../../css/exo2.css";

function Index() {
  const [cegeps, setCegeps] = useState([]);

  const ajouterCegep = () => {
    const nom = prompt("Entrez le nom du Cégep");
    const logo = prompt("Entrez l'url du logo");
    const nouveauCegep = { nom, logo };
    setCegeps([...cegeps, nouveauCegep]);
  };

  const supprimerCegep = (index) => {
    const nouveauCegeps = cegeps.filter((cegep, i) => i !== index);
    setCegeps(nouveauCegeps);
  };

  return (
    <div className="exo2">
      <div className="container-exo2">
        <button className="prompt-text" onClick={ajouterCegep}>
          Ajouter un cégep
        </button>
      </div>
      <div className="card-cegep">
      <ul className="exo2-liste">
        {cegeps.map((cegep, index) => (
          <li key={index} className="cegep">
            <img src={cegep.logo} alt={cegep.nom} />
            <p>{cegep.nom}</p>
            <button className="btn-cegep" onClick={() => supprimerCegep(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
