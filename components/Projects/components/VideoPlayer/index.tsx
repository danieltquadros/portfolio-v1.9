import React from 'react';

interface VideoPlayerProps {
  projectUrl: string;
}

const VideoPlayer = ({ projectUrl }: VideoPlayerProps) => {
  return (
    <div>
      <iframe
        width="500"
        height="268"
        src={`https://www.youtube.com/embed/${projectUrl}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        title="YouTube Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
