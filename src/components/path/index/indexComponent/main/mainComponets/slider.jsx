import React, { useState, useEffect } from 'react';
import pic1 from '../../../../../../img/index/main/pic1.png';
import pic2 from '../../../../../../img/index/main/pic2.png';
import pic3 from '../../../../../../img/index/main/pic3.png';
import pic4 from '../../../../../../img/index/main/pic4.png';
import pic6 from '../../../../../../img/index/main/pic6.png';
import pic7 from '../../../../../../img/index/main/pic7.png';
import './slider.scss';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [pic1, pic2, pic3, pic4, pic6, pic7];

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider">
            <div className="slider__container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slider__slide ${index === currentIndex ? 'slider__slide--active' : ''
                            }`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Сдвиг слайдов
                    >
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="slider__button slider__button--prev" onClick={goToPrevSlide}>
                &#10094;
            </button>
            <button className="slider__button slider__button--next" onClick={goToNextSlide}>
                &#10095;
            </button>
        </div>
    );
}

export default Slider;