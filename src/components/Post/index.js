import React from 'react';

import './index.css';


function Post(props) {
  return <article >

      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.author}</p>
      <p>{props.text}</p>
      
      
      <img width= "75%" src ={props.image.link} alt = {props.image.alt}/>
      <ul>
      {
        props.highlights.map((highlight) => {
          console.log(highlight)
          return <li key = {highlight.key}>{highlight.text}</li>
        })
      }
      </ul>

  </article>;
}

export default Post;
