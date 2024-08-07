import React, { useState } from "react";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameErr, setNameErr] = useState(false);

    function registration() {
        if ((username.trim().length === 0) || (password.trim().length === 0) || (email.trim().length === 0)) {
            setNameErr(true);
        } else if (!email.includes('@') || !email.includes('.') || !email.includes('com')) {
            alert('Please enter a valid email address');
        } else if (password.length < 5) {
            alert('Please enter a password with more than five characters');
        } else {
            setNameErr(false);
            const user = { username: username, email: email, password: password };
            console.log(user);
            localStorage.setItem('user', JSON.stringify({ name: username, email: email, password: password }));
            window.location.href = '/';
        }
    }

    return (
        <div className="register-page">
            <div className="register-body">
                <div className="register-main">
                    <h1>Register Form</h1>
                    {nameErr && <p className="errP">*Please fill every input field*</p>}
                    <br />
                    <p>Name</p>
                    <input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    <br />
                    <p>Email</p>
                    <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <br />
                    <p>Password</p>
                    <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <br /><br />
                    <button onClick={registration}>Register</button>
                </div>
            </div>
        </div>
    );
}

export default Register;
