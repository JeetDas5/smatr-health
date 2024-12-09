'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Use Next.js router

  interface FormEvent {
    preventDefault: () => void;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Account created successfully! Redirecting to login...');
        setTimeout(() => router.push('/login'), 2000); // Navigate to login page
      } else {
        toast.error(result.error || 'Failed to create account. Please try again.');
      }
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-opacity-80"
            >
              Sign Up
            </button>
            <Link href="/login" className="text-sm text-primary hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
