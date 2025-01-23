import React from "react";

function User({ user }) {
    const person = user.user || {}
    console.log(user.user);

    return (
        <li className="main__card">
            <div className="main__card_textWrap">
                <p className="main__card_textWrap_title">
                    {person.title}
                </p>
                <p className="main__card_textWrap_text">
                    {person.textCard}
                </p>
            </div>
            <div className="allImg" id="allImg">
                <div className="main__imgWrap">
                    <img src={person.img} alt={person.title} className="main__card_img" />
                </div>
                <div className="main__imgWrap2">
                    <img src={person.img2} alt={person.title} className="main__card_img2" />
                    <img src={person.img3} alt={person.title} className="main__card_img3" />
                </div>
            </div>
            <div className="main__mapWrap">
                <iframe src={person.map} width={800} height={450} style={{ border: "0" ,borderRadius: '10px' }} allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </li>
    )
}

export default User;