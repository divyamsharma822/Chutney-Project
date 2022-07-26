import React, { useState } from "react";
import "./App.css";
import Row from "./components/Row";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./features/dataSlice";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reg, setReg] = useState(-1);
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const data = useSelector(state => state.data.list);
    console.log(data);

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(
            add({
                Name: name,
                Email: email,
                Reg: reg,
                Password: password,
            })
        );
    };

    return (
        <div className='app'>
            <form className='form' onSubmit={handlesubmit}>
                <h1> Student Form</h1>
                <label>Enter Name</label>
                <input
                    type='text'
                    placeholder='Enter Name'
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Enter Reg No.</label>
                <input
                    type='number'
                    placeholder='Enter RegNo'
                    onChange={(e) => setReg(e.target.value)}
                />
                <label>Enter Email</label>
                <input
                    type='email'
                    placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Enter Password</label>
                <input
                    type='password'
                    placeholder='Enter password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            <div className='container'>
                { data.map((curr, i) => (
                    <Row
                        key={i}
                        index={i}
                        name={curr.Name}
                        email={curr.Email}
                        password={curr.Password}
                        reg={curr.Reg}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
