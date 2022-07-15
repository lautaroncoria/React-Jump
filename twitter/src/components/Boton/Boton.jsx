import React from 'react';

class Boton extends React.Component {
  render() {
    const { type } = this.props;
    return(
      <button className={type === 'Tweet' ? 'BotonTweet' : 'BotonFollow'}>
        {type}
      </button>
    );
  }
}

export default Boton;