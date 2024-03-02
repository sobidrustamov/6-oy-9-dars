import React from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <div className="pt-5">
      <Link className="text-2xl hover:bg-yellow-100 p-3" to="/">
        Todos
      </Link>
    </div>
  );
};
