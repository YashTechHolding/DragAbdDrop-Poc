import React, { useCallback, useRef } from "react";
import { useDndZone } from "react-dnd-action";

export function Column({ name, items, onItemsChange }) {
  const itemsContainerRef = useRef();
  const handleClick = useCallback(function () {
    alert("dragabble elements are still clickable :)");
  }, []);
  const handleSort = useCallback(
    function (e) {
      onItemsChange(e);
    },
    [onItemsChange]
  );

  useDndZone(
    itemsContainerRef,
    { items, flipDurationMs: 150 },
    handleSort,
    handleSort
  );

  return (
    <div className="column">
      <div className="column-title">{name}</div>
      <div className="column-content" ref={itemsContainerRef}>
        {items.map((item) => (
          <div key={item.id} className="card" onClick={handleClick}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
