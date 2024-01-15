import React from "react";
import Badge from "./Badge";

function List({ players }) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {players.map((e, i) => {
        return (
          <div key={i} style={{ padding: "20px" }}>
            <Badge player={e} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
