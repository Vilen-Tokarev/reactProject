import React from "react";
import './main.scss'
import { Link } from "react-router-dom";
import Slider from "./mainComponets/slider";

function Main() {
    return (
        <>
            <section className="main">
                <div className="container">
                    <p className="titleIndex">Путеводитель по городу Судак</p>
                    <div className="main__controls">
                        <Slider />
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