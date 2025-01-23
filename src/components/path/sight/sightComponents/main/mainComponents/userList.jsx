import React from "react";
import { Link } from "react-router-dom";

function UserList({ users }) {

    return (
        <ul id="userList">
            {users.map((user) => {
                return (
                    <Link to={`card/${user.id}`} key={user.id}>
                        <li className="main__card1">
                            <div className="main__card1_textWrap">
                                <p className="main__card1_textWrap_title">
                                    {user.title}
                                </p>
                                <p className="main__card1_textWrap_text" >
                                    {user.text}
                                </p>
                            </div>
                            <img className="main__card1_img" src={user.img} alt={user.title} />
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}


export default UserList;

