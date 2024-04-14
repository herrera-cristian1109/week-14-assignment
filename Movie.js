import React from 'react'

function Movie = ({ title, director, themes, rating, review, image, synopsis }) => {
    return (
      <div className="movie">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Themes:</strong> {themes.join(', ')}</p>
        <p><strong>Rating:</strong> {rating}/10</p>
        <p>{synopsis}</p>
        <p><strong>Review:</strong> {review}</p>
      </div>
    );
  };

export default Movie