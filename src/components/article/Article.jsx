import React from 'react'
import './article.css';

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className='newone__blog-container_article'>
      <div className='newone__blog-container_article-image'>
        <img src={imageUrl} alt='blog' />
      </div>
      <div className='newone__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>

      </div>
    </div>
  )
}

export default Article