import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async () => {
        setErrorMessage('');  // Clear any previous error messages
        if (!userName || !password) {
            setErrorMessage("Both fields are required.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { userName, password });
            alert(response.data.message);  // Show success message
            setUserName('');
            setPassword('');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Display specific error from server
                setErrorMessage(error.response.data.message);
            } else {
                // Generic error message
                setErrorMessage('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
            />
            <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button onClick={handleRegister}>Register</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
}

export default Register;
