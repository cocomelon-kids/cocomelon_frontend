// frontend/src/components/RegistrationForm.jsx

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    if (!formData.program) {
      alert('Please select a program');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          childName: formData.childName,
          phone: formData.phone,
          password: formData.password,
          program: formData.program,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        console.log('Registered Student:', data.student);
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
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
