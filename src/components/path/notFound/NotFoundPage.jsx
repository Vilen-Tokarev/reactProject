import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return(
        <>
            <h1>Страницы не существует</h1>
            <Link to={'/'}>Вернуться на домашнюю страницу</Link>
        </>
    )
}


export default NotFoundPage;