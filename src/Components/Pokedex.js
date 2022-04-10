import React from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css"
function Pokedex(props) {
  
  // const card = props.pokemon.map((val) => {
  //   return <PokeCard key={val.id} name={val.name} type={val.type} exp={val.base_experience} id={val.id} />;
  // });


  return (
    <div className="pokedex">
      <h1>Total Exp:{props.total}</h1>
      <h1 className={props.isWinner?"winner":"looser"}>{props.isWinner?"Winner":"Looser"}</h1>
      <div className="pokedex-cards">
      {props.pokemon.map((val,index)=><PokeCard name={val.name} type={val.type} exp={val.base_experience} id={val.id} key={index}/>)}
      </div>

    </div>
  );
}


export default Pokedex;
