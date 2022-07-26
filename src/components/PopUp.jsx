import React, { useState } from "react";
import "./PopUp.css";
import { useSelector, useDispatch } from "react-redux";
import { del, add } from "../features/dataSlice";

const PopUp = ({ onClick, index }) => {
    const data = useSelector((state) => state.data.list[index]);
    const [Name, setName] = useState(data.Name);
    const [Email, setEmail] = useState(data.Email);
    const [Reg, setReg] = useState(data.Reg);
    const [Password, setPassword] = useState(data.Password);

    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(del(index));

        dispatch(
            add({
                Name: Name,
                Email: Email,
                Reg: Reg,
                Password: Password,
            })
        );
    };

    return (
        <>
            <div className='popup'>
                <form className='formpopup' onSubmit={handlesubmit}>
                    <h1> Student Form</h1>
                    <button onClick={handleClick}>Edit</button>
                    <label>Enter Name</label>
                    <input
                        type='text'
                        defaultValue={data.Name}
                        placeholder='Enter Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Enter Reg No.</label>
                    <input
                        type='number'
                        defaultValue={data.Reg}
                        placeholder='Enter RegNo'
                        onChange={(e) => setReg(e.target.value)}
                    />
                    <label>Enter Email</label>
                    <input
                        type='email'
                        defaultValue={data.Email}
                        placeholder='Enter Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Enter Password</label>
                    <input
                        type='password'
                        defaultValue={data.Password}
                        placeholder='Enter password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>Submit</button>
                    <button type='button' className='btn' onClick={onClick}>
                        Close
                    </button>
                </form>
            </div>
        </>
    );
};

export default PopUp;
