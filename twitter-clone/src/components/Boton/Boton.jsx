import React from 'react';

function Boton({ type }) {    
    return(
      <button className={type}>
        {type === 'boton-tweet-small' || type === 'boton-tweet-large' ? 'Tweet' : 'Follow'}
      </button>
    );
}

export default Boton;