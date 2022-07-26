import React, { useState } from "react";
import "./App.css";
import Row from "./components/Row";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reg, setReg] = useState(-1);
    const [password, setPassword] = useState("");
    const [arr, setArr] = useState([]);

    const handlesubmit = (e) => {
        e.preventDefault();
        setArr([...arr, { StudentName: name, StudentPassword: password ,StudentEmail :email , StudentReg: reg}]);
        console.log(arr);
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
                {arr.map((curr) => (
                    <Row
                        name={curr.StudentName}
                        email={curr.StudentEmail}
                        password={curr.StudentPassword}
                        reg={curr.StudentReg}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
