import React from "react";

const VideoBackground = () => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/xcJtL7QggTI?si=R7wsiGi4Wrph_aY4&autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
