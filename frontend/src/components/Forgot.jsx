import React, { useState } from 'react';
import './Forgot.css';

const securityQuestions = [
  "What was your first pet's name?",
  "What is your car number?",
  "What was the name of your first school?",
  "What was your favorite food as a child?"
];

const Forgot = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(securityQuestions[0]);
  const [answers, setAnswers] = useState({
    petName: '',
    carNumber: '',
    schoolName: '',
    favoriteFood: ''
  });
  const [message, setMessage] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleAnswerChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (e) => {
    setSelectedQuestion(e.target.value);
  };

  const handleSecurityQuestionSubmit = (e) => {
    e.preventDefault();
    setMessage('Your answers have been submitted.');
    setShowPasswordForm(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setMessage('Passwords do not match. Please try again.');
      return;
    }
    setMessage('Your password has been successfully reset.');
  };

  return (
    <div className="forgotBackgroundimg">
      <div className="ForgotBox">
        <h1>{!showPasswordForm ? 'Forgot Password' : 'New Password'}</h1>
        {!showPasswordForm ? (
          <>
            <form onSubmit={handleSecurityQuestionSubmit}>
              <label htmlFor="securityQuestion">Select your security question:</label>
              <select
                id="securityQuestion"
                value={selectedQuestion}
                onChange={handleQuestionChange}
                required
              >
                {securityQuestions.map((question, index) => (
                  <option key={index} value={question}>{question}</option>
                ))}
              </select>
              <label htmlFor="answer"></label>
              <input
                type="text"
                id="answer"
                name={
                  selectedQuestion === securityQuestions[0] ? 'petName' :
                  selectedQuestion === securityQuestions[1] ? 'carNumber' :
                  selectedQuestion === securityQuestions[2] ? 'schoolName' :
                  'favoriteFood'
                }
                value={
                  selectedQuestion === securityQuestions[0] ? answers.petName :
                  selectedQuestion === securityQuestions[1] ? answers.carNumber :
                  selectedQuestion === securityQuestions[2] ? answers.schoolName :
                  answers.favoriteFood
                }
                onChange={handleAnswerChange}
                required
                placeholder="Your Answer"
              />
              <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
          </>
        ) : (
          <>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                placeholder="Old Password"
              />
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                placeholder="New Password"
              />
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
                placeholder="Confirm New Password"
              />
              <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default Forgot;
