import React, { useState } from "react";
import PopUp from "./PopUp";
import "./Row.css";

const Row = ({ name, reg, email, password, index }) => {
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div>
       
            {toggle ? (
                <div className='row' onClick={handleClick}>
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
                    toggle={toggle}
                    onClick={handleClick}
                    index={index}
                />
            )}
        </div>
    );
};

export default Row;
