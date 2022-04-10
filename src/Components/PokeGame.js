import React from "react";
import Pokedex from "./Pokedex";
import "./PokeGame.css";

function PokeGame(props) {
  const hand1 = [];
  const hand2 = [];

  function addingToArray(arry) {
    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * props.pokemon.length);
      arry.push(props.pokemon[random]);
    }
    return arry;
  }
  const firstPokedex = addingToArray(hand1);
  const secondPokedex = addingToArray(hand2);

  function sumExp(arry) {
    return arry.reduce((sum, { base_experience }) => sum + base_experience, 0);
  }
  const total1 = sumExp(firstPokedex);
  const total2 = sumExp(secondPokedex);
  console.log("total1", total1);
  console.log("total2", total2);
  console.log(total1 > total2 ? true : false);
  const win1 = total1 > total2 ? true : false;
  const win2 = total2 > total1 ? true : false;

  return (
    <div className="pokegame">
      <Pokedex pokemon={firstPokedex} total={total1} isWinner={win1} />

      <Pokedex pokemon={secondPokedex} total={total2} isWinner={win2} />
    </div>
  );
}
PokeGame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
};

export default PokeGame;
// totalExp={sumExp(firstPokedex)}
// totalExp={sumExp(secondPokedex)}
let a = [{ exp: 2 }, { exp: 3 }, { exp: 4 }, { exp: 2 }, { exp: 2 }];
a.reduce((sum, crnt) => sum.exp + crnt.exp);
