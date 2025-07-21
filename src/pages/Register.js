import React, { useState } from 'react';
import api from '../services/api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await api.post('/register', { email, password });
      alert('Registered successfully!');
    } catch {
      alert('Registration failed.');
    }
  };

  return (
    <div className="auth-form">
      <h3>Register</h3>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
