import React from "react";
import MainBox from './mainComponents/mainBox.jsx'
import './main.scss'
function Main() {
    return (
        <section class="main">
            <div class="container">
                <p class="main__title">
                    Контакты
                </p>
                <MainBox />
            </div>
        </section>
    )
}

export default Main;