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

      <div className="exo2-liste">
        {cegeps.map((cegep, index) => (
          <Cegep-Nom key={index}>
            <div className="exo2-liste-content">
              <img src={cegep.logo} alt={cegep.nom} />
            </div>
            <p>{cegep.nom}</p>

            <button className="btn-cegep" onClick={() => supprimerCegep(index)}>
              x
            </button>
          </Cegep-Nom>
        ))}
      </div>
    </div>
  );
}

export default Index;
