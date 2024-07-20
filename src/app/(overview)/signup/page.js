"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { Button } from "@mui/material";
import Link from "next/link";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.clear();
    console.log('i am here');
    console.log(data, '>>>>>>>>>>>>>>>>>>>......5');

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('registrationMessage', 'email sent');
        localStorage.setItem('token', data.token);

        toast("Email token sent");
        router.replace("/verify");
      } else {
        throw new Error('Failed to submit form');
      }

      // Clear the form
      event.target.reset();

      // Reload the page
      // window.location.reload();
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Failed to submit form: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAEFF0] p-4 sm:p-8">
      <div className="border border-white px-6 py-8 sm:px-10 sm:py-10 rounded-xl bg-white w-full max-w-md">
        <div className="text-start mb-6">
          <h1 className="font-bold text-xl sm:text-2xl">Create an account</h1>
          <p className="text-gray-400 text-sm sm:text-base">Register to continue with Hyiprio</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-300 focus:bg-white focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-300 focus:bg-white focus:outline-none text-sm"
                />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Password*</label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-300 focus:bg-white focus:outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-sm text-blue-600 mt-2"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" />
            <p>I agree with Privacy & Policy and Terms & Condition</p>
          </div>
          <div className="text-center">
            <Button
              type="submit"
              className="bg-orange-400 hover:bg-pink-800 w-full rounded-full text-white py-3 text-sm"
            >
              CREATE ACCOUNT
            </Button>
          </div>
          <div className="text-center text-sm">
            <p>
              Already have an account? <Link href="/login" className="text-blue-600">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
