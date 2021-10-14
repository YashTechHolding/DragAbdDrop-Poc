
// import VerticalList from 'from "svelte-dnd-action"
// import HorizontalList from './HorizontalList.svelte';
// import Board from './Board.svelte';


// let items1 = [
//   {id: 11, name: "item11"},
//   {id: 12, name: "item12"},
//   {id: 13, name: "item13"},
//   {id: 14, name: "item14"},
//   {id: 15, name: "item15"},
//   {id: 16, name: "item16"},
//   {id: 17, name: "item17"}
// ]; 
// let items2 = [
//   {id: 21, name: "item21"},
//   {id: 22, name: "item22"},
//   {id: 23, name: "item23"},
//   {id: 24, name: "item24"},
//   {id: 25, name: "item25"}
// ]; 
// let items3 = [
//   {id: 31, name: "item31"},
//   {id: 32, name: "item32"},
//   {id: 33, name: "item33"},
//   {id: 34, name: "item34"},
//   {id: 35, name: "item35"},
//   {id: 36, name: "item36"}
// ];
// let items5 = [
//   {id: 51, name: "item51"},
//   {id: 52, name: "item52"},
//   {id: 53, name: "item53"},
//   {id: 54, name: "item54"},
//   {id: 55, name: "item55"},
//   {id: 56, name: "item56"}
// ];
// let board = [
//   {
//     id: 1,
//     name: "TODO",
//     items: [
//       {id: 41, name: "item41"},
//       {id: 42, name: "item42"},
//       {id: 43, name: "item43"},
//       {id: 44, name: "item44"},
//       {id: 45, name: "item45"},
//       {id: 46, name: "item46"},
//       {id: 47, name: "item47"},
//       {id: 48, name: "item48"},
//       {id: 49, name: "item49"}
//     ]
//   },
//   {
//     id: 2,
//     name: "DOING",
//     items: []
//   },
//   {
//     id: 3,
//     name: "DONE",
//     items: []
//   }
// ];



// function App() {
  
//   return (
//     <Board columnItems={board}></Board>
//   );
// }

// export default App;



import React, {useRef, useCallback, useState} from 'react';
import {useDndZone} from "react-dnd-action";

function App() {
  const listRef = useRef();
  const [items, setItems] = useState([
    {id: "item1"},
    {id: "item2"},
    {id: "item3"}
  ]);
  const handleSort = useCallback(function ({items, info}) {
    console.log("sort handler got", {items, info});
    setItems(items);
  }, []);

  useDndZone(listRef, {items}, handleSort);

  return (
      <div className="App">
        <ul ref={listRef}>
          {items.map(item => <li key={item.id}>{item.id}</li>)}
        </ul>
      </div>
  );
}

export default App;