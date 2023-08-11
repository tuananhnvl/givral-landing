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

const SliderPrice = () => {
  const [currentIndex, setCurrentIndex] = useState('banh-le');

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const updateChoice = (e) => {
    console.log(e.target.getAttribute('data-name'))
    setCurrentIndex(e.target.getAttribute('data-name'));
  }
  return (
    <div className='view-price'>
          <div className="btn-gr-oncombo">
        <button onClick={updateChoice} data-name='banh-le'>Bang gia banh le</button>
        <button onClick={updateChoice} data-name='combo-list-2'>Combo A</button>
        <button onClick={updateChoice} data-name='combo-list-1'>Combo B</button>
        <button onClick={updateChoice} data-name='combo-list-3'>Combo Sac mau</button>
        <button onClick={updateChoice} data-name='chiet-khau'>Chiet khau</button>
      </div>
      <div className="view-display">
        <img src={`/banggia-chietkhau/${currentIndex}.png`} alt={`Image ${currentIndex}`} />
      </div>
    
    </div>
  );
};

export default SliderPrice;
