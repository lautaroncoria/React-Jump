import React from 'react';
import Boton from '../Boton/Boton';
import Publicacion from '../Publicacion/Publicacion';
import Imagen from '../Imagen/Imagen';
import Navbar from '../Navbar/Navbar';

function App() {
    return(
      <div className='App'>
        <Navbar />
        {/* <Dashboard />
        <Sugerencias /> */}
        {/*
        <Publicacion 
          name='Username'
          username='username'
          date='Jun 16'
          content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
          comments='3'
          retweets='2'
          likes='6'
        >
          <Imagen 
            avatar='https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6' 
            title='Avatar 1'/>
        </Publicacion> */}
      </div>
    );
}

export default App;
