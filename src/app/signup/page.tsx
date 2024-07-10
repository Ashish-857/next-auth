import SignUpForm from '../components/SignUpForm';
import Link from 'next/link';
// import '../styles/auth.css';

export default function SignUpPage() {
  return (
    <div>
      <SignUpForm />
      <div className="auth-links">
        <Link href="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}
