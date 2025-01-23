import React, { useState } from "react";
import Modal from "../../modal/modal.jsx";


function MainBox() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="main__box">
            <div className="main__box_wrap">
                <img src="./assets/img-contact/ИП 1.png" alt="img" className="main__box_img" />
                <ul className="main__box_contact">
                    <li className="main__box_contact_text">
                        <img src="./assets/img-contact/Subtract.png" alt="img" />
                        <p className="main__box_contact_text_num">+7 999 999 99 99</p>
                    </li>
                    <li className="main__box_contact_text">
                        <img src="./assets/img-contact/Frame 100.png" alt="img" />
                        <p className="main__box_contact_text_num">pytevoditel@gmail.com</p>
                    </li>
                    <li className="main__box_contact_text">
                        <img src="./assets/img-contact/Vector.png" alt="img" />
                        <p className="main__box_contact_text_num">@Sudak_putevoditel</p>
                    </li>
                    <nav className="main__box_contact_btn">
                        <button
                            onClick={openModal}
                            id="open-modal-btn"
                            className="main__box_contact_btn_text"
                        >
                            Связаться с нами
                        </button>
                    </nav>
                </ul>
            </div>
            <div className="main__box_map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22625.812220244585!2d34.97495095!3d44.857682999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb703946df1341%3A0x9b4f45507bf68863!2z0KHRg9C00LDQug!5e0!3m2!1sru!2sus!4v1729439408357!5m2!1sru!2sus"
                    width="813"
                    height="553"
                    style={{ borderRadius: '25px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    );
}

export default MainBox;