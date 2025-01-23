import React from "react";
import pic1 from '../../../../../../img/index/main/pic1.png'
import pic2 from '../../../../../../img/index/main/pic2.png'
import pic3 from '../../../../../../img/index/main/pic3.png'
import pic4 from '../../../../../../img/index/main/pic4.png'
import pic6 from '../../../../../../img/index/main/pic6.png'
import pic7 from '../../../../../../img/index/main/pic7.png'

function Slider() {
    return (
        <div className="main__slider">
            <div className="main__slider_gallery">
                <span><img src={pic1} alt="img" /></span>
                <span><img src={pic2} alt="img" /></span>
                <span><img src={pic3} alt="img" /></span>
            </div>
            <div className="main__slider_gallery">
                <span><img src={pic4} alt="img" /></span>
                <span><img src={pic6} alt="img" /></span>
                <span><img src={pic7} alt="img" /></span>
            </div>
        </div>
    )
}


export default Slider;