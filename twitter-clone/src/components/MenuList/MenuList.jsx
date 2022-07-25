import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

function MenuList({ arrIcon }) {
  return(
    <ul>
      {
        arrIcon.map( iconObj => (
          <MenuItem key={iconObj.id} iconObj={iconObj} />
        ))
      }
    </ul>
  );
}

export default MenuList;