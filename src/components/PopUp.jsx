import React from "react";
import "./PopUp.css";

const PopUp = ({ name, reg, email, password }) => {

    

    return (
        <div className='popup'>
            {" "}
            {name && (
                <div>
                    <b>Name </b> : {name}
                </div>
            )}
            {reg && (
                <div>
                    {" "}
                    <b>Reg </b>:{reg}
                </div>
            )}
            {email && (
                <div>
                    {" "}
                    <b>Email </b>:{email}
                </div>
            )}
            {password && (
                <div>
                    {" "}
                    <b>Password </b>:{password}
                </div>
            )}
        </div>
    );
};

export default PopUp;
