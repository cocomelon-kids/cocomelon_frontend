import React, { useState } from 'react';
import RegistrationForm from '../auth/RegistrationForm';
import LoginForm from '../auth/LoginForm';
import ForgotPassword from '../auth/ForgotPassword';
import '../auth/FormStyles.css';


const Auth = () => {
  const [activeForm, setActiveForm] = useState('login');

  const toggleForm = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="auth-container">
      {activeForm === 'login' && <LoginForm />}
      {activeForm === 'register' && <RegistrationForm />}
      {activeForm === 'forgot' && <ForgotPassword />}
      
      <div className="form-switch">
        {activeForm === 'login' ? (
          <>
            <p>Don't have an account? <button onClick={() => toggleForm('register')}>Register</button></p>
            <p>Forgot your password? <button onClick={() => toggleForm('forgot')}>Reset Password</button></p>
          </>
        ) : (
          <p>Already have an account? <button onClick={() => toggleForm('login')}>Login</button></p>
        )}
      </div>
    </div>
  );
};

export default Auth;
