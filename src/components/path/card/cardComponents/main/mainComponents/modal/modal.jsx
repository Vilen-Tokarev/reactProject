import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './modal.scss'
function Modal({ btn, setBtn }) {
    const [style, setStyle] = useState({ display: 'none' })
    const { id } = useParams()
    const baseUrl = 'https://672caf7e1600dda5a9f97a34.mockapi.io/user'

    const [form, setForm] = useState({
        login: '',
        rare: 0,
        text: '',
    })

    const handleSet = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const postForm = () => {
        if (form.rare > 10 || form.rare < 0 || form.login === '' || form.text === '') {
            alert('Ошибка')
        } else {
            axios.post(`${baseUrl}/${id}/reviews`, {
                login: form.login,
                rare: form.rare,
                text: form.text
            }).then((res) => {
                console.log(res);
                window.location.reload();
            }).catch((error) => {
                console.log('Ошибка в запросе');
            })
        }
    }
    
    useEffect(() => {
        if (btn === true) {
            setStyle({ visibility: 'visible', opacity: 1 })
        }
        else {
            setStyle({ visibility: 'hidden', opacity: 0 })
        }

    }, [btn])

    return (
        <section id="modal" style={style} class="modal">
            <div class="modal__box">
                <button class="modal__box_close" id="close-modal-btn" onClick={() => { setBtn(false) }}>
                    <img src="./assets/img-contact/X.png" alt="img" />
                </button>
                <p class="modal__box_title">
                    Форма
                </p>
                <div class="modal__box_input">
                    <input class="modal__box_input_login" name="login" value={form.login} onChange={handleSet} maxlength="15" type="login" id="login"
                        placeholder="Как к вам обращаться" />
                    <input class="modal__box_input_rare" name="rare" value={form.rare} onChange={handleSet} type="number" id="rare" placeholder="Оценка 1-10" />
                    <textarea class="modal__box_input_text" maxlength="50" value={form.text} name="text" onChange={handleSet} id="text" cols="80" rows="10"
                        placeholder="Отзыв" />
                </div>
                <nav class="modal__box_btn">
                    {/* <a href=""> */}
                    <button id="send-modal-btn" onClick={() => { setBtn(false); postForm(); }} class="modal__box_btn_text">Отправить</button>
                    {/* </a> */}
                </nav>
            </div>
        </section>
    )
}

export default Modal;