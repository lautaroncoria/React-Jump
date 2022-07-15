import React from 'react';

class Imagen extends React.Component {
  render() {
    const { avatar, title } = this.props;
    return(
      <img className='Imagen' src={avatar} alt={title}/>
    );
  }
}

export default Imagen;