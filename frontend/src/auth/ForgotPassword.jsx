import React, { useState } from 'react';
import './FormStyles.css';

const ForgotPassword = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // Logic to send OTP to the phone number
    console.log(`Sending OTP to: ${phone}`);
    setOtpSent(true);  // Simulating OTP sent
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Logic to verify OTP
    if (otp === '123456') { // Simulate OTP check
      console.log('OTP Verified');
      setOtpVerified(true);
    } else {
      alert('Invalid OTP');
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Logic to reset the password
    console.log('Password reset for:', phone);
    alert('Password has been reset successfully');
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      {!otpSent ? (
        <form onSubmit={handlePhoneSubmit} className="form">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Username)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : !otpVerified ? (
        <form onSubmit={handleOtpSubmit} className="form">
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      ) : (
        <form onSubmit={handlePasswordReset} className="form">
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
