import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <div>
        <Link href="/login">
          <button>Login</button>
        </Link>
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}