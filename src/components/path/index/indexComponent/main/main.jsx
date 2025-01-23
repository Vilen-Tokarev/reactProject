import React from "react";
import './main.scss'
import { Link } from "react-router-dom";
import Slider from "./mainComponets/slider";
import Vector2 from '../../../../../img/index/main/Vector2.png'
import Vector from '../../../../../img/index/main/Vector.png'

function Main() {
    return (
        <>
            <section className="main">
                <div className="container">
                    <p className="titleIndex">Путеводитель по городу Судак</p>
                    <div className="main__controls">
                        <img src={Vector2} alt="img" id="leftbtn" />
                        <Slider />
                        <img src={Vector} alt="img" id="rightbtn" />
                    </div>
                    <div className="main__btn">
                        <Link to="/sight" className="main__btn_text">Смотреть больше</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;