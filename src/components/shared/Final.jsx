import React from 'react';

const Final = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black relative">
      <video
        className="w-[80vw] h-auto"
        autoPlay
        loop
        controls
      >
        <source src="./final video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Flipped GIF at the bottom-right */}
          <p className="absolute bottom-5 left-5  text-white font-bold bg-purple-600 px-3 py-1 rounded-2xl">Harry Potter dekhle😭</p>
      <div className="absolute bottom-4 right-4 flex items-center space-x-2 ">
        <img
          src="./fighting.gif" // Replace with your GIF URL
          alt="Harry Potter"
          className="w-40 h-40 transform scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default Final;
