'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
// import '../styles/auth.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login, loginWithGoogle, loginWithFacebook, loginWithGitHub } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push('/dashboard');
    } catch (error) {
      console.error('Google Login failed:', error);
      alert('Google Login failed. Please try again.');
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook();
      router.push('/dashboard');
    } catch (error) {
      console.error('Facebook Login failed:', error);
      alert('Facebook Login failed. Please try again.');
    }
  };

  const handleGithubLogin = async () => {
    try {
      await loginWithGitHub();
      router.push('/dashboard');
    } catch (error) {
      console.error('GitHub Login failed:', error);
      alert('GitHub Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn">Login</button>
      <button type="button" className="btn btn-google" onClick={handleGoogleLogin}>
        <FaGoogle className="icon" /> Login with Google
      </button>
      <button type="button" className="btn btn-facebook" onClick={handleFacebookLogin}>
        <FaFacebook className="icon" /> Login with Facebook
      </button>
      <button type="button" className="btn btn-github" onClick={handleGithubLogin}>
        <FaGithub className="icon" /> Login with GitHub
      </button>
    </form>
  );
}
