'use client'

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
// import '../styles/auth.css';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      alert('Password reset email sent. Please check your inbox.');
    } catch (error) {
      console.error('Password reset failed:', error);
      alert('Password reset failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h1>Forgot Password</h1>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <button type="submit" className="btn">Reset Password</button>
    </form>
  );
}