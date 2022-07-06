import React from "react";

export default function Scroll({ children }) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "500px"
      }}
    >
      {children}
    </div>
  );
}
