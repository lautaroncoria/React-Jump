import React from "react";
import Input from '../Input/Input';
import { useState } from 'react';

function App() {

  const [state, setState] = useState(
    {
      nombre: '',
      apellidos: [
        '',   // Materno
        ''    // Paterno
      ]
    }
  );

  const cambiarNombreObjeto = event => {
    setState({...state, nombre: event.target.value});
  }

  const cambiarApellidosObjeto = event => {
    if (event.target.id === '2') {
      setState({...state, apellidos: [event.target.value, state.apellidos[1]]});
    } else {
      setState({...state, apellidos: [state.apellidos[0], event.target.value]});
    }
  }

  return (
    <div className="App">
      <Input valorId='1' type='text' cambiarValorObjeto={cambiarNombreObjeto} placeholder='Nombre'/>
      <Input valorId='2' type='text' cambiarValorObjeto={cambiarApellidosObjeto} placeholder='Apellido Materno'/>
      <Input valorId='3' type='text' cambiarValorObjeto={cambiarApellidosObjeto} placeholder='Apellido Paterno'/>

{/*

    let props = {
      valorId: '1',
      type: 'text',
      cambiarValorObjeto: 'cambiarNombreObjeto'
    }


    let type = props.type
    let valorId = props.valorId

    let { type } = props

    console.log(props.type)



*/}
      <p>Mi nombre es:</p>
      <span>{state.nombre} {state.apellidos[0]} {state.apellidos[1]}</span>
    </div>
  );
}

export default App;
