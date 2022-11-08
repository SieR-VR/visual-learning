import { useEffect, useState } from "react";

const ContextMenu = (props: { x: number, y: number }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: props.y,
        left: props.x,
        backgroundColor: "white",
        border: "1px solid black",
        padding: "5px",
      }}
    >
      <div>Context Menu</div>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
  );
}

export default ContextMenu;