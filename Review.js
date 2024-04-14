import React from 'react'

function Review = ({ title, director, themes, rating, review }) => {
    return (
      <div className="movie-review">
        <h2>{title}</h2>
        <p><strong>Directed by:</strong> {director}</p>
        <p><strong>Themes:</strong> {themes.join(', ')}</p>
        <p><strong>Rating:</strong> {rating}/10</p>
        <p>{review}</p>
      </div>
    );
  };

export default Review