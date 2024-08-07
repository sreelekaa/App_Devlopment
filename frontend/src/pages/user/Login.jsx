import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../assets/css/styles.css';

function Login() {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginNameErr, setLoginNameErr] = useState(false);
    const [loginPasswordErr, setPasswordErr] = useState(false);
    const [incorrectErr, setIncorrectErr] = useState(false);
    const navigate = useNavigate();

    function Loginvalidation() {
        // Reset error states
        setLoginNameErr(loginName.trim().length === 0);
        setPasswordErr(loginPassword.trim().length === 0);

        if (loginName.trim().length === 0 || loginPassword.trim().length === 0) return;

        // Retrieve user from localStorage
        const registeredUser = JSON.parse(localStorage.getItem('user'));

        if (registeredUser && (registeredUser.name === loginName && registeredUser.password === loginPassword)) {
            setIncorrectErr(false);
            // Redirect to the home page or other appropriate page
            navigate('/home');
        } else {
            setIncorrectErr(true);
            alert("User not found or incorrect credentials");
        }
    }

    return (
        <div className="login-page">
            <div className="login-body">
                <div className="login-main">
                    <h1>Login</h1>
                    {incorrectErr && <small style={{ color: 'red', textAlign: 'center' }}>Enter the correct username and password</small>}
                    <br />
                    <p>Name</p>
                    <input type='text' value={loginName} onChange={(e) => setLoginName(e.target.value)} />
                    {loginNameErr && <small style={{ color: '#d3521d' }}>Please enter the Username</small>}
                    <br />
                    <p>Password</p>
                    <input type='password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                    {loginPasswordErr && <small style={{ color: '#d3521d' }}>Please enter the password</small>}
                    <br />
                    <button onClick={Loginvalidation}>Login</button><br />
                    <p style={{ fontSize: '15px' }}>Don't have an account yet? <Link to={'/register'}>Register</Link></p>
                    <p style={{ fontSize: '15px' }}>Are you an admin? <Link to={'/admin/login'}>Admin Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
