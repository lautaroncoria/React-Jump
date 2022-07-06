import React from 'react';
import Boton from '../Boton/Boton';
import Texto from '../Texto/Texto';
import { useState } from 'react';

function App() {

  const [numActual, setNumActual] = useState('0');

  const convertir = (evento) => {
    setNumActual(evento.target.innerText);
  };

  return (
    <div className='App'>
      <div className='cont-all'>
        <Texto 
          numElegido={numActual}
          textoNumElegido={
            numActual === '1' 
            ? 'uno' 
            : numActual === '2' 
            ? 'dos' 
            : numActual === '3' 
            ? 'tres' 
            : 'cero'
          }
        />
        <div className='contenedor-botones'>
          <Boton numBoton='1' convertir={convertir} />
          <Boton numBoton='2' convertir={convertir} />
          <Boton numBoton='3' convertir={convertir} />
        </div>
      </div>
    </div>
  );
}

export default App;
