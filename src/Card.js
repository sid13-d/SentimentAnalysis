import React from 'react';
import './Card.css';

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.thumbnailUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.summary}</p>
      <button><a href={item.link}>Read more</a></button>
    </div>
  );
}

export default Card;