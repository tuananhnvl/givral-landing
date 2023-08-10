import { useState } from 'react';

const images = [
  '/more/album_4.jpg',
  '/more/album_5.jpg',
  '/more/album_6.jpg',
  '/more/album_7.jpg',
  '/more/album_8.jpg',
  '/more/album_9.jpg',
  '/more/album_10.jpg',
  '/more/album_15.jpg',
  '/more/album_16.jpg',
  '/more/album_17.jpg',
  '/more/album_18.jpg',
];

const ImageSliderBtn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="slider">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <div className="controls">
        <button onClick={goToPrevious}>Previous</button>
        <button onClick={goToNext}>Next</button>
      </div>
      <style jsx>{`
        .slider {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px;
        }

        img {
          max-width: 100%;
          max-height: 100%;
        }

        .controls {
          display: flex;
          justify-content: center;
          margin-top: 16px;
        }

        button {
          margin: 0 8px;
          padding: 8px 16px;
          background-color: #333;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ImageSliderBtn;
