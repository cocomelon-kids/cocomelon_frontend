// src/Auth/RegistrationForm.jsx
import React, { useState } from 'react';
import './FormStyles.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    childName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    program: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    if (!formData.program) {
      alert('Please select a program');
      return;
    }
    // Handle form submission logic here (e.g., API call to register user)
    console.log('Registration Data:', formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        name="childName"
        placeholder="Child's Name"
        value={formData.childName}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number (Username)"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <select
        name="program"
        value={formData.program}
        onChange={handleChange}
        required
      >
        <option value="">Select Program</option>
        <option value="pre-school">Pre-School (1.6 years - 4 years)</option>
        <option value="daycare">Daycare (6 months - 15 months)</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
