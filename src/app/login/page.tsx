import React from 'react';
import LoginForm from '../components/LoginForm';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <div>
      <LoginForm />
      <div className="auth-links">
        <Link href="/signup">Sign Up</Link> | 
        <Link href="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default LoginPage;


