// Exercice 2
// Vous devez avoir une page qui permet d'afficher une liste de cégeps.

// Sur cette page, il doit y avoir un bouton qui appelle une fonction dans laquelle on doit pouvoir entrer le nom du cégep ainsi que l’url du logo via le prompt. Un objet sera alors créé et inséré dans le tableau.

// Exemple d’objet : {nom: "Cégep de Saint-Laurent", logo: "https://....."}

// Aussi, on doit pouvoir supprimer un Cégep de la liste. Le bouton de suppression d’un Cégep doit se trouver sur la carte d’un Cégep (voir capture d’écran ci-dessous).

// Pour cet exercice, vous devez avoir deux composants :

// Le composant principal, celui sur lequel on arrive
// - C'est ici que sera déclaré l'état contenant la liste ul des Cégeps sous forme de tableau
// - On doit avoir la fonction qui permet d'ajouter l'objet contenant le nom du Cégep et le logo
// - On doit avoir la fonction qui permet de supprimer un Cégep du tableau.

// Le composant qui permet d'afficher chacun des Cégeps
// - On lui passe le nom et le logo d'un Cégep en props
// - On lui passe également en props la fonction de suppression d'un Cégep du tableau.
// Vous trouverez les logos de Cégeps èa cette adresse: https://fedecegeps.ca/federation/a-propos/membres/. Vous pourrez alors copier l'adresse des logos en faisant un clic droit sur l'image et en choisissant "Copier l'adresse de l'image".

// Nom des Cégeps à utiliser : Cégep de Trois-Rivières, Cégep de Valleyfield, Cégep du vieux Montréal, Cégep de Chicoutimi.

// Vous devez utiliser le useState pour cet exercice.

// Vous devez utiliser le CSS pour styliser votre application.

// Vous devez utiliser le fichier ../../exo2.css pour le CSS global de votre application.

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
      <ul className="exo2-liste">
        {cegeps.map((cegep, index) => (
          <li key={index} className="cegep">
            <img src={cegep.logo} alt={cegep.nom} />
            <p>{cegep.nom}</p>
            <button class="btn-cegep" onClick={() => supprimerCegep(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
