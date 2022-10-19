import React from "react";

export const Planet = ({ planet, id }) => {
  return (
    <div className="bg-slate-500 text-white m-3 p-3 rounded-sm" key={id}>
      <h3>{planet.name}</h3>
      <p>Population = {planet.population}</p>
      <p>Terrain = {planet.terrain}</p>
    </div>
  );
};
