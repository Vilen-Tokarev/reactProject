import React from "react";
import Main from "./contactComponents/main/main";
import Modal from "./contactComponents/modal/modal";

function Contact() {
    return (
        <>
            {/* <div id="loading"></div>
            <div id="loader" class="load">
                <hr />
                <hr />
                <hr />
                <hr />
            </div> */}
            <Main />
            <Modal />
        </>
    )
}


export default Contact;