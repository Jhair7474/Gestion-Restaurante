// src/components/ChangeBgButton.jsx
import React from 'react';

function ChangeBgButton({ setBgColor }) {
  return (
    <button onClick={() => setBgColor("lightblue")}>
      Cambiar Color de Fondo
    </button>
  );
}

export default ChangeBgButton;
