import React from 'react';

function Texto({ numElegido, textoNumElegido }) {
  return (
    <p>
      {numElegido} - {textoNumElegido}
    </p>
  );
}

export default Texto;