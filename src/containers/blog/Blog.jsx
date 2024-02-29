import React from 'react'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='newone__blog section__padding' id='blog'>
      <div className='newone__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='newone__blog-container'>
        <div className='newone__blog-container_groupA'>
          <Article imageUrl={blog01} date="sep 26, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='newone__blog-container_groupB'>
          <Article imageUrl={blog02} date="sep 26, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imageUrl={blog03} date="sep 26, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imageUrl={blog04} date="sep 26, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imageUrl={blog05} date="sep 26, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog