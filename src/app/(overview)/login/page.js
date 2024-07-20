"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        // Redirect to dashboard
        router.replace('/DashboardLayout/sample-page');
      } else {
        // Handle login error
        toast(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAEFF0] p-4 sm:p-8">
      <div className="border border-white px-6 py-8 sm:px-10 sm:py-10 rounded-xl bg-white w-full max-w-md">
        <div className="text-start mb-6">
          <h1 className="font-bold text-xl sm:text-2xl">Welcome Back!</h1>
          <p className="text-gray-400 text-sm sm:text-base">Sign in to continue with Hyiprio User Panel</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-200 focus:bg-white focus:outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-200 focus:bg-white focus:outline-none text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              className="text-sm text-blue-600 mt-2">
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p className="text-blue-600">Forget Password</p>
          </div>
          <div className="text-center">
            <Button 
              type="submit" 
              className="bg-orange-400 hover:bg-pink-800 w-full rounded-full text-white py-3">
              {loading ? "Loading..." : "ACCOUNT LOGIN"}
            </Button>
          </div>
          <div className="text-center text-sm">
            <p>
              Don&apos;t have an account? <Link href="/signup" className="text-blue-600">Signup for free</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
