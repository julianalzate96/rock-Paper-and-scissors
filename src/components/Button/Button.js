import React from "react";

export default function Button({ title, handleChoice }) {
  return <button onClick={() => handleChoice(title)}>{title}</button>;
}
