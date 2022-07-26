import React, { useState } from "react";
import PopUp from "./PopUp";
import "./Row.css";

const Row = ({ name, reg, email, password }) => {
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className='row' onClick={handleClick}>
            {toggle ? (
                <div>
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
                </div>
            ) : (
                <PopUp
                    email={email}
                    password={password}
                    name={name}
                    reg={reg}
                    toggle={toggle}
                    onClick={handleClick}
                />
            )}
        </div>
    );
};

export default Row;
