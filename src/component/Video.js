import React from 'react';
import { useParams } from 'react-router-dom';

function Video() {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}?si=${Math.random().toString(36).substring(2, 15)}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
