import React from "react";
import "./PokeCard.css";

function PokeCard(props) {
  const fancyImag = (number) => {
    return number < 999 ? `00${number}`.slice(-3) : "number";
  };
  const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  return (
    <div className="pokecard">
      <h3>{props.name}</h3>
      <div className="pokecard-image">
        <img src={`${url}${fancyImag(props.id)}.png`} alt={props.name} />
      </div>
      <p>Type:{props.type}</p>
      <p>EXP:{props.exp}</p>
    </div>
  );
}

export default PokeCard;
