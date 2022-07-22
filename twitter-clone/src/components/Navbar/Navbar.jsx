import React from 'react';
import Boton from '../Boton/Boton';
import Profile from '../Profile/Profile';
import MenuList from '../MenuList/MenuList';
import infoIcon from '../../infoIcon.json';

function Navbar() {
  return (
    <div className='Navbar'>
      <MenuList arrIcon={infoIcon}/>
      <Boton type='boton-tweet-large' />
      <Profile />
    </div>
  );
}

export default Navbar;