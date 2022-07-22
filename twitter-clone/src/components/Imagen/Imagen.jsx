import React from 'react';

class Imagen extends React.Component {
  render() {
    const { type, nombreImagen, alt } = this.props;

    return(
      <img className={type} src={require(`../../assets/img/${nombreImagen}.webp`)} alt={alt}/>
    );
  }
}

export default Imagen;