import { useEffect, useRef } from 'react';

const SliderDrag = ({children}) => {
  const sliderRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (event) => {
    event.preventDefault();
    isDragging = true;
    startX = event.pageX;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    event.preventDefault();
   
    sliderRef.current.scrollLeft = event.pageX;

  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, [sliderRef]);

  return (
    <div className="slider" ref={sliderRef}>
      <div className="slider-content">
        {children}
      </div>
      <style jsx>
        {`
          .slider {
            width: 100%;
            overflow-x: scroll;
            scroll-behavior: smooth;
            white-space: nowrap;
          }

          .slider-content {
            display: inline-flex;
            scroll-behavior: smooth;
            /* Add styling to your slider content */
          }
        `}
      </style>
    </div>
  );
};

export default SliderDrag;
