import React from "react";

export const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button
        onClick={() => setPage("planets")}
        className="p-5 m-5 bg-slate-500 text-white rounded-sm hover:bg-slate-700"
      >
        Planets
      </button>
      <button
        onClick={() => setPage("People")}
        className="p-5 m-5 bg-slate-500 text-white rounded-sm hover:bg-slate-700"
      >
        People
      </button>
    </nav>
  );
};
