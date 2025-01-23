import React, { useEffect, useState } from "react";
import Slider from './cardComponents/slider/slider.jsx'
import Rewiews from "./cardComponents/reviews/reviews.jsx";
import Main from "./cardComponents/main/main.jsx";
import { useParams, useNavigation } from "react-router-dom";
import axios from "axios";
function Card() {
    const { id } = useParams()
    const baseUrl = 'https://672caf7e1600dda5a9f97a34.mockapi.io/user'
    const [user, setUser] = useState(null)
    useEffect(() => {
        axios.get(`${baseUrl}/${id}`).then((res) => {
            setUser(res.data)
        })
    },[id])

    return (
        <>
            <Slider user={{user} || {}} />
            <Main user={{user} || {}} />
            <Rewiews />
        </>
    )
}


export default Card;