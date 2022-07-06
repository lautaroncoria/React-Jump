import React from 'react';
import Boton from '../Boton/Boton';
import { useState } from 'react';

function App() {

  const [valorActual, setValorActual] = useState(5);

  const sumar = () => {
    setValorActual(valorActual + 1);
  };

  const restar = () => {
    setValorActual(valorActual - 1);
  }

  return (
    <div className="App">
      <Boton 
        texto='Sumar'
        calcular={sumar}
      />
      <span>{valorActual}</span>
      <Boton
        texto='Restar'
        calcular={restar}
      />
    </div>
  );
}

export default App;
