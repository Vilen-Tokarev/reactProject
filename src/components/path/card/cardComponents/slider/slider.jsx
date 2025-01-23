import React, { useState } from "react";
import './slider.scss';

function Slider({ user }) {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openSlider = () => {
    setIsSliderVisible(true);
  };

  const closeSlider = () => {
    setIsSliderVisible(false);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1)); 
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const images = [user.img, user.img2, user.img3]; 

  return (
    <>
      <img
        src={user.img}
        alt={user.title}
        onClick={openSlider}
        style={{ cursor: 'pointer', width: '200px' }}
      />

      {isSliderVisible && (
        <div id="slider_screen" className="screen_slider">
          <button id="closeSlider" onClick={closeSlider}>x</button>
          <div className="slider-container">
            <button className="slider__btn-prev" onClick={goToPrevSlide} value={'<--'} />
            <div className="slider" id="sliderImg">
              <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            </div>
            <button className="slider__btn-next" onClick={goToNextSlide} value={'-->'} />
          </div>
        </div>
      )}
    </>
  );
}

export default Slider;