import React, { useState } from 'react';
import './Quiz.css'; // Import CSS file for styling
import { Helmet } from "react-helmet-async";

// Define the questions, options, and their corresponding correct answers
var questions = [
    {
        "question": "What is a common method of social engineering?",
        "options": ["Phishing", "Firewall", "Encryption", "Intrusion Detection"],
        "answer": "Phishing"
    },
    {
        "question": "Which of the following is a type of malware that encrypts files and demands payment for decryption?",
        "options": ["Trojan", "Worm", "Ransomware", "Spyware"],
        "answer": "Ransomware"
    },
    {
        "question": "What is the purpose of a VPN (Virtual Private Network)?",
        "options": ["To encrypt internet traffic", "To amplify Wi-Fi signal", "To block malware", "To monitor network activity"],
        "answer": "To encrypt internet traffic"
    },
    {
        "question": "Which protocol is commonly used for secure communication over the internet?",
        "options": ["HTTP", "FTP", "SMTP", "HTTPS"],
        "answer": "HTTPS"
    },
    {
        "question": "What is the purpose of a firewall in network security?",
        "options": ["To monitor network traffic", "To prevent unauthorized access", "To encrypt data transmissions", "To detect malware"],
        "answer": "To prevent unauthorized access"
    },
    {
        "question": "Which of the following is NOT a best practice for creating secure passwords?",
        "options": ["Using dictionary words", "Including numbers and symbols", "Using a combination of uppercase and lowercase letters", "Creating long passwords"],
        "answer": "Using dictionary words"
    },
    {
        "question": "What is the term for a program that appears legitimate but performs malicious activities in the background?",
        "options": ["Adware", "Rootkit", "Spam", "Phishing"],
        "answer": "Rootkit"
    },
    {
        "question": "What does the term 'DDoS' stand for in the context of cyber attacks?",
        "options": ["Distributed Detection of Service", "Direct Denial of Service", "Distributed Denial of Service", "Denial of Direct Service"],
        "answer": "Distributed Denial of Service"
    },
    {
        "question": "What is the purpose of encryption in cybersecurity?",
        "options": ["To hide data", "To detect malware", "To authenticate users", "To slow down internet speed"],
        "answer": "To hide data"
    },
    {
        "question": "Which of the following is NOT considered personally identifiable information (PII)?",
        "options": ["Social Security Number", "Date of Birth", "Favorite Color", "Mother's Maiden Name"],
        "answer": "Favorite Color"
    },
    {
        "question": "What is a common method for protecting sensitive data stored on a computer?",
        "options": ["Data Encryption", "Data Duplication", "Data Compression", "Data Obfuscation"],
        "answer": "Data Encryption"
    },
    {
        "question": "Which of the following is a recommended practice to prevent malware infections?",
        "options": ["Keep software updated", "Disable antivirus software", "Click on suspicious links", "Share passwords openly"],
        "answer": "Keep software updated"
    },
    {
        "question": "What is the purpose of two-factor authentication?",
        "options": ["To use two different types of encryption", "To verify a user's identity with two pieces of evidence", "To hide data using two layers of encryption", "To encrypt data with two different algorithms"],
        "answer": "To verify a user's identity with two pieces of evidence"
    },
    {
        "question": "Which of the following is a method to prevent unauthorized access to a wireless network?",
        "options": ["MAC filtering", "Disabling encryption", "Broadcasting SSID", "Using default passwords"],
        "answer": "MAC filtering"
    },
    {
        "question": "What is the term for a security attack that tricks a user into providing confidential information?",
        "options": ["Phishing", "Spyware", "Malware", "Ransomware"],
        "answer": "Phishing"
    },
    {
        "question": "What is a common method for securing online accounts?",
        "options": ["Using the same password for multiple accounts", "Disabling account recovery options", "Enabling two-factor authentication", "Sharing passwords with friends"],
        "answer": "Enabling two-factor authentication"
    },
    {
        "question": "Which of the following is NOT an example of physical security?",
        "options": ["Biometric scanners", "Firewalls", "Security guards", "Surveillance cameras"],
        "answer": "Firewalls"
    },
    {
        "question": "What does 'HTTPS' stand for in the context of web browsing?",
        "options": ["Hypertext Transfer Protocol Secure", "Highway Traffic Encryption Protocol", "Hyperlink Transmission System", "Home Transfer Protocol System"],
        "answer": "Hypertext Transfer Protocol Secure"
    },
    {
        "question": "What is the term for a security mechanism that limits access to information based on a user's role?",
        "options": ["Access Control", "Firewall", "Intrusion Detection System", "Encryption"],
        "answer": "Access Control"
    },
    {
        "question": "Which of the following is an example of a 'zero-day' vulnerability?",
        "options": ["A software bug that has been known for years", "A security flaw that has never been exploited", "A vulnerability that is discovered and exploited before a fix is available", "A virus that only affects old computer systems"],
        "answer": "A vulnerability that is discovered and exploited before a fix is available"
    },
    {
        "question": "What is the term for a network security system that monitors and analyzes network traffic?",
        "options": ["Intrusion Detection System", "Antivirus Software", "Firewall", "Spyware"],
        "answer": "Intrusion Detection System"
    }
]
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
var shuffledList = shuffleArray(questions);

// Take the first 15 items from the shuffled list
questions = shuffledList.slice(0, 12);

function Quiz() {
    const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));

    const handleOptionSelect = (index, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = option;
        setSelectedOptions(newSelectedOptions);
    };

    return (
        <>
            <Helmet>
                <title>
                    Quiz | Cyber security awarness
                </title>
            </Helmet>
            <div className="quiz-container">
                <h2 className="quiz-title">Quiz</h2>
                {questions.map((questionData, index) => (
                    <div key={index} className="question-container">
                        <h3 className="question">{questionData.question}</h3>
                        <ul className="options">
                            {questionData.options.map((option, optionIndex) => (
                                <li key={optionIndex}>
                                    <label className="option-label">
                                        <input
                                            type="radio"
                                            name={`question${index}`}
                                            value={option}
                                            checked={selectedOptions[index] === option}
                                            onChange={() => handleOptionSelect(index, option)}
                                        />
                                        {option}
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            ))}

                        </ul>
                        {selectedOptions[index] && (
                            <span className="feedback" style={{ color: selectedOptions[index] === questionData.answer ? 'green' : 'red' }}>
                                {selectedOptions[index] === questionData.answer ? ' ✓ Correct' : ``}
                                {selectedOptions[index] !== questionData.answer ? ' ✘ Wrong' : ``}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Quiz;
