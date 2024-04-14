import React from 'react'

// review component //
function ReviewList(stars, review) {
  return (
    <div className="review">
        <h3>{author}</h3>
        <p>{content}</p>
    </div>
  );
};

// movie component with a container for reviews //
function Movie = ({title, reviews}) => {
    return (
        <div className="movie">
            <h2>{title}</h2>
            <div className="reviews-container">
                {reviews.map((review, index) => (
                    <Review key={index} author={review.author} content={review.content} />
                ))}
            </div>
        </div>
    );
};

export default ReviewList