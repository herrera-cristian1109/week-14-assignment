import React from 'react'

function Stars = () => {
  function [rating, setRating] = useState(0);

  function handleSelect = (value) => {
    setRating(value);
  };

return (
    <div className="star-rating">
        {[1,2,3,4,5].map((value) => (
            <Star key={value} selected={value <= rating} onSelect={() => handleSelect(value)} />
        ))}
        <div className="rating-value">{rating > 0 ? `You rated this movie ${rating} star${rating > 1 ? 's' : ''}.` : ''}</div>
    </div>
  );
};

export default Stars