'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  const handleSignOut = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </header>
      <main>
        <section className="welcome">
          <h2>Welcome to your dashboard!</h2>
          <p>Here you can view and manage your reports, settings, and more.</p>
        </section>
        <section className="reports">
          <h2>Reports</h2>
          <ul>
            {['Report 1', 'Report 2', 'Report 3'].map((report, index) => (
              <li key={index}>{report}</li>
            ))}
          </ul>
        </section>
        <section className="settings">
          <h2>Settings</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <button type="submit">Save Changes</button>
          </form>
        </section>
      </main>
    </div>
  );
}