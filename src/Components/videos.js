import React from 'react';
import VideoCard from './VideoCard.js';
import '../styles/videos.css';

const Videos = ({ videos }) => {
  return (
    <div className='videos'>
      {videos.map((video, index) => (
        <VideoCard key={video.image} image={video.image} />
      ))}
    </div>
  );
};

export default Videos;
