import React from 'react';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShare } from 'react-icons/fi';

class Publicacion extends React.Component {
  render() {
    const { name, username, date, content, comments, retweets, likes, children } = this.props;
    return(
      <article className='PublicacionArticle'>
        <div className='PublicacionImagenContenedor'>
          {children} 
          { /* Children sería la imagen */ }
        </div>
        <div className='PublicacionContenidoContenedor'>
          <header className='PublicacionHeader'>
            <span className='PublicacionName'>{name}</span>
            <span className='PublicacionUsername'>@{username}</span>
            <time className='PublicacionDate'>{date}</time>
          </header>
          <body>
            <p className='PublicacionParagraph'>{content}</p>
          </body>
          <footer className='PublicacionFooter'>
            <div>
              <FaRegComment />
              <span>{comments}</span>
            </div>
            <div>
              <AiOutlineRetweet />
              <span>{retweets}</span>
            </div>
            <div>
              <MdOutlineFavoriteBorder />
              <span>{likes}</span>
            </div>
            <div>
              <FiShare />
            </div>
          </footer>
        </div>
      </article>
    );
  }
}

export default Publicacion;