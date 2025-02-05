'use client'

import { useState } from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/admin');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-orange-400 p-2">Login</button>
    </form>
  );
};

export default LoginPage;
