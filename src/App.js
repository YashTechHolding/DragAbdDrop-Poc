import React, { useState } from "react";
import { Board } from "./Board";
import "./styles.css";

export default function App() {
  const [board, setBoard] = useState([
    {
      id: 1,
      name: "TODO",
      items: [
        { id: 41, name: "item41" },
        { id: 42, name: "item42" },
        { id: 43, name: "item43" },
        { id: 44, name: "item44" },
        { id: 45, name: "item45" },
        { id: 46, name: "item46" },
        { id: 47, name: "item47" },
        { id: 48, name: "item48" },
        { id: 49, name: "item49" }
      ]
    },
    {
      id: 2,
      name: "DOING",
      items: []
    },
    {
      id: 3,
      name: "DONE",
      items: []
    }
  ]);
  return (
    <main className="App">
      <h4>
        Drag items or columns. Hold an item at the edge of a column to make the
        content scroll
      </h4>
      <hr />
      <Board columnItems={board} onColumnItemsChange={setBoard} />
    </main>
  );
}
