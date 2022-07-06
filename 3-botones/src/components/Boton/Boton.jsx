import React from 'react';

function Boton({ numBoton, convertir }) {
  return (
    <button
      onClick={convertir}>
      {numBoton}
    </button>
  );
}

export default Boton;