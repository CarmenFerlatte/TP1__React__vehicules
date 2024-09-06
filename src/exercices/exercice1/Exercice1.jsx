import { useState } from "react";
import "../../css/exo1.css";

function Index() {
  const [text, setText] = useState("Aucun texte");
  const [color, setColor] = useState("black");

  const changeColor = (color) => {
    setColor(color);
  };

  const changeText = () => {
    const text = prompt("Entrez le texte");
    setText(text);
  };

  return (
    <div className="exo1">
      <div className="container-exo1">
        <button className="prompt-text" onClick={changeText}>
          Changer le texte
        </button>
        <button className="btn-bleu" onClick={() => changeColor("blue")}>
          Bleu
        </button>
        <button className="btn-rouge" onClick={() => changeColor("red")}>
          Rouge
        </button>
        <button className="btn-vert" onClick={() => changeColor("green")}>
          Vert
        </button>
      </div>
      <div className="exo1-text">
        <p style={{ color: color }}>{text}</p>
      </div>
    </div>
  );
}

export default Index;
