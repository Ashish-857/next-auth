import ForgotPasswordForm from '../components/ForgotPasswordForm';
import Link from 'next/link';
// import '../styles/auth.css';

export default function ForgotPasswordPage() {
  return (
    <div>
      <ForgotPasswordForm />
      <div className="auth-links">
        <Link href="/login">Remember your password? Login</Link>
      </div>
    </div>
  );
};
