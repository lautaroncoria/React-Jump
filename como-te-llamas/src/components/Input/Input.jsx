import React from "react";

function Input({ valorId, type, cambiarValorObjeto, placeholder }) {
  return (
    <input 
      id={valorId}
      type={type} 
      onKeyUp={cambiarValorObjeto}
      placeholder={placeholder}
      />
  );
}

export default Input;