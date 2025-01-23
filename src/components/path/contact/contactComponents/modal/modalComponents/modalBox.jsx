import React, { useState } from "react";
function ModalBox({ closeModal }) {
    const [form, setForm] = useState({
        tel: '',
        email: '',
        text: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    return (
        <div className="modal__box">
            <button className="modal__box_close" id="close-modal-btn" onClick={closeModal}>
                <img src="./assets/img-contact/X.png" alt="img" />
            </button>
            <p className="modal__box_title">Форма</p>
            <div className="modal__box_input">
                <input
                    value={form.tel}
                    className="modal__box_input_tel"
                    onChange={handleChange}
                    name="tel"
                    type="text"
                    id="tel"
                    placeholder="Введите номер телефона"
                />
                <input
                    value={form.email}
                    className="modal__box_input_email"
                    onChange={handleChange}
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Введите электронную почту"
                />
                <textarea
                    value={form.text}
                    className="modal__box_input_text"
                    onChange={handleChange}
                    name="text"
                    id="message"
                    cols="80"
                    rows="10"
                    placeholder="Введите желаемый вопрос"
                ></textarea>
            </div>
            <nav className="modal__box_btn">
                <button onClick={() => {
                    console.log(form);
                    closeModal();
                    setForm({
                        tel: '',
                        email: '',
                        text: '',
                    })
                }} id="send-modal-btn" className="modal__box_btn_text">
                    Отправить
                </button>
            </nav>
        </div>
    );
}

export default ModalBox;