import React from 'react';

function MenuItem({ iconObj }) {
  return(
    <li className='MenuItem'>
      <svg viewBox="0 0 24 24" width="26.25px"><g><path d={iconObj.path}></path></g></svg>
      {iconObj.name}
    </li>
  );
}

export default MenuItem;