import React, { useState } from "react";

function AddContact(props) {
    const [input, setInput] = useState({
        name: "",
        email:""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setInput((preValue) => {
            return {...preValue, [name]: value};
        });
    }

    function handleClick(event) {
        if (input.name == "" || input.email=="") {
            alert("All fields are Mandatory !");
            return;
        }
        
        setInput({
            name: "",
            email: ""
        });
        event.preventDefault();
        props.onAdd(input);
    }


    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={input.name} onChange={handleChange} />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={input.email} onChange={handleChange} />
                </div>

                <button className="ui button blue" onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default AddContact;