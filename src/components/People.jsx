import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Planet } from "./Planet";
import { Person } from "./Person";

// https://swapi.dev/documentation
const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

export const People = () => {
  // query
  const { data, status } = useQuery(["people"], fetchPeople);

  console.log(data);

  return (
    <div>
      <h2 className="text-xl text-center">People</h2>
      {/* <p>{status}</p> */}

      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <div>
          {data.results.map((person, idx) => (
            <Person person={person} id={idx} />
          ))}
        </div>
      )}
    </div>
  );
};
