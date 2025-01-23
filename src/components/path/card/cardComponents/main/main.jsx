import React, { useState } from "react";
import Modal from "./mainComponents/modal/modal.jsx";
import User from './mainComponents/user.jsx';
import './main.scss'
import { Link } from "react-router-dom";

function Main({ user }) {
    const [modalBtn, setModalBtn] = useState(false)

    return (
        <section class="main">
            <div class="container">
                <div id="userDetails" class="main__card">
                    <div class="main__back-btn">
                        <Link to={'/sight'} class="main__back-btn_a">Назад</Link>
                    </div>
                </div>
                <User user={user} />
                <button id="open-modal-btn" class="main__box_contact_btn_text" onClick={() => setModalBtn((prevState) => !prevState)}>
                    Оставить отзыв
                </button>
                <Modal btn={modalBtn} setBtn={setModalBtn} />
            </div>
        </section>
    )
}

export default Main;