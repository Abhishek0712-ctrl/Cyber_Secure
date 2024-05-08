import React, { useState } from 'react';
import './passwordGenrator.css'; // Import your CSS file for styling
import { Helmet } from "react-helmet-async";

const PasswordGenrator = () => {
    const [strength, setStrength] = useState('');
    const [password, setPassword] = useState("");
    const [passLen, setPassLen] = useState("")
    const handlePassLen = (e) => {
        setPassLen(e.target.value);
    };
    const generatePassword = () => {
        const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const specialChars = '!@#$%^&*()_+{}[]<>?';
        const numbers = '0123456789';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

        let generatedPassword = '';
        const len = parseInt(passLen)
        for (let i = 0; i < len; i++) {
            const categoryIndex = Math.floor(Math.random() * 4);

            switch (categoryIndex) {
                case 0:
                    generatedPassword += capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
                    break;
                case 1:
                    generatedPassword += specialChars[Math.floor(Math.random() * specialChars.length)];
                    break;
                case 2:
                    generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
                    break;
                case 3:
                    generatedPassword += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
                    break;
                default:
                    break;
            }
        }

        setPassword(generatedPassword);
        setStrength(checkPasswordStrength(generatedPassword));
    };
    const copyToClipboard = () => {

        navigator.clipboard.writeText(password);
    }
    const checkPasswordStrength = (password) => {
        // Check password strength based on certain criteria
        // Example criteria: length, presence of special characters, uppercase and lowercase letters, and numbers
        if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
            return 'Strong';
        } else if (password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
            return 'Moderate';
        } else {
            return 'Weak';
        }

    };
    const [myPass, setMyPass] = useState('');
    const [crackTime, setCrackTime] = useState('');

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setMyPass(newPassword);
        const timeToCrack = calculateCrackTime(newPassword);
        setCrackTime(timeToCrack);
    };

    const calculateCrackTime = (password) => {
        // Assume average rate of 100 billion password tries per second (source: https://security.stackexchange.com/a/174920)
        // Calculate entropy of the password
        const entropy = calculateEntropy(password);
        // Calculate the number of tries required to crack the password
        const numberOfTries = Math.pow(2, entropy);
        // Calculate time in seconds required to crack the password
        const timeInSeconds = numberOfTries / 100; // Dividing by rate of tries per second
        console.log(timeInSeconds)
        return timeInSeconds;
    };

    const calculateEntropy = (password) => {
        // Calculate the entropy of the password using Shannon entropy formula
        const charset = new Set(password);

        const entropy = Math.log2(Math.pow(charset.size, password.length));
        return entropy;
    };

    const formatCrackTime = (seconds) => {
        // Convert seconds to a more human-readable format
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours} hours and ${minutes} minutes`;
    };


    return (
        <>
            <Helmet>
                <title>
                    Password Genrator | Cyber security awarness
                </title>
            </Helmet>
            <div className='container'>
                <div className="password-generator-container">
                    <div className="password-generator-header">
                        <h2>Password Generator</h2>
                    </div>
                    <div className="password-generator-content">
                        <div className="password-input-container">
                            <div className="input-container">
                                <label htmlFor="passLen">Password Length:</label>
                                <input type="text" id="passLen" value={passLen} onChange={handlePassLen} />
                            </div>
                        </div>
                        <div className="password-input-container">
                            <div class="input-container">
                                <label htmlFor="gebratedPassword">Password:</label>
                                <input type="text" id="generatedPassword" value={password} readOnly />
                            </div>
                            <button onClick={copyToClipboard}>
                                <span role="img" aria-label="Copy">&#128203;</span>
                            </button>
                        </div>
                        <div className="password-strength">Strength: {strength}</div>
                        <br />
                        <button onClick={generatePassword}>Generate Password</button>
                    </div>
                </div>
                <div className="password-strength-checker-container">
                    <h2>Password Strength Checker</h2>
                    <div className="input-container">
                        <label htmlFor="password">Password:</label>
                        <input
                            type='text'
                            id="password"
                            value={myPass}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    {crackTime !== '' && (
                        <div className="crack-time-info">
                            <p>Estimated time hacker take to crack your password:</p>
                            <p>{formatCrackTime(crackTime)}</p>
                        </div>
                    )}
                    <i>Note** <b>We are assuming 100 passwords tries each second by hacker. it may be variable.</b> </i>
                </div>

            </div>
        </>
        // <h1>Hello</h1>
    );
};

export default PasswordGenrator;
