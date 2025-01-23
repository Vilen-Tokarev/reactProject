import React from "react";
import './slider.scss'

function Slider() {
    return (
        <div id="slider_screen" class="screen_slider">
            <button id="closeSlider">x</button>
            <div class="slider-container">
                <button class="slider__btn-prev" value={'<--'} />
                <div class="slider" id="sliderImg"></div>
                <button class="slider__btn-next" value={'-->'} />
            </div>
        </div>
    )
}


export default Slider;