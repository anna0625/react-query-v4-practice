import React from "react";

export const Person = ({ person, id }) => {
  return (
    <div className="bg-slate-500 text-white m-3 p-3 rounded-sm" key={id}>
      <h3>{person.name}</h3>
      <p>Gender = {person.gender}</p>
      <p>Birth year = {person.birth_year}</p>
    </div>
  );
};
