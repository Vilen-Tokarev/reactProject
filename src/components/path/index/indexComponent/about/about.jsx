import React from "react";
import Cart1 from "./aboutComponetns/card1/card1.jsx";
import Cart2 from "./aboutComponetns/card2/card2.jsx";
import './about.scss'
function About() {
    return (
        <section id="about" className="aboutcity">
            <div className="container">
                <div className="aboutcity__cardWrap">
                    <Cart1/>
                    <Cart2/>
                </div>
            </div>
        </section>
    )
}


export default About;