import React from "react";
import user from "../images/user.png";

function ContactList(props) {

    function handleClick(){
        props.onDelete(props.id);
    }


    return (
        <div className="ui celled list">
            <div className="item">
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <div className="header">{props.name}</div>
                    <div>{props.email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}} onClick={handleClick}></i>
            </div>
        </div>
    )
}

export default ContactList;