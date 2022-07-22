import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Imagen from '../Imagen/Imagen';

function Profile() {
  return(
    <a className='Profile'>
      <Imagen type='imagen-small' nombreImagen='avatar-myavatar' alt='avatar' />
      
      <div className='Profile__name'>
        <span className='Profile__publicname'>User Name</span>
        <span className='Profile__username'>@username</span>
      </div>
      
      <BsThreeDots />
    </a>
  );
}

export default Profile;