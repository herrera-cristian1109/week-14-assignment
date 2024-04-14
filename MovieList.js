import React from 'react'
import Movie from './Movie';

function DisneyMovieContainer = () => {
  function disneyMoviesData = [
    {
      id: 1,
      title: 'The Lion King',
      director: 'Roger Allers, Rob Minkoff',
      themes: ['Family', 'Friendship', 'Identity'],
      rating: 9,
      review: 'A timeless classic that beautifully captures themes of family, friendship, and finding one\'s identity. The animation, music, and storytelling make it a beloved Disney masterpiece.'
    },
    {
      id: 2,
      title: 'Frozen',
      director: 'Chris Buck, Jennifer Lee',
      themes: ['Sisterhood', 'Self-discovery', 'Love'],
      rating: 8,
      review: 'Frozen is a heartwarming tale of sisterly love and self-discovery. With catchy songs and memorable characters, it has become a modern Disney favorite.'
    },
    {
      id: 3,
      title: 'Moana',
      director: 'Ron Clements, John Musker',
      themes: ['Adventure', 'Identity', 'Culture'],
      rating: 9,
      review: 'Moana is a breathtaking adventure that celebrates bravery, culture, and the power of believing in oneself. Its animation and music are top-notch, making it a standout Disney film.'
    }
  ];

  return (
    <div className="disney-movie-container">
      {disneyMoviesData.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList