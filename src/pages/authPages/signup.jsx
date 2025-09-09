import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/services/authContext'
import { doCreateUserWithEmailAndPassword } from '@/services/auth'
import { Mail, Eye, EyeClosed } from "lucide-react";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) return;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    setIsRegistering(true);
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      toast.success("Account created successfully 🎉");
      navigate("/shop/home"); // redirect after signup
    } catch (err) {
      toast.error(err.message || "Failed to create account ❌");
      setIsRegistering(false);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={'/home'} replace={true} />}

      <main className="w-full h-screen flex justify-center items-center">
        <div className="w-full bg-white p-8 pt-8 px-24">
          <h2 className="text-4xl font-bold text-center text-black mb-6">
            Create new account
          </h2>

          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-md font-bold text-gray-800">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="mt-2 w-full px-4 py-3 text-sm border border-primary rounded-lg outline-none focus:border-indigo-600 placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-md font-bold text-gray-800">
                Email Address
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Your Email Id"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-primary rounded-lg outline-none focus:border-indigo-600 placeholder-gray-400"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-md font-bold text-gray-800">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  disabled={isRegistering}
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Enter Your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-primary rounded-lg outline-none focus:border-indigo-600 placeholder-gray-400"
                />
                {showPassword ? (
                  <Eye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeClosed
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-md font-bold text-gray-800">
                Confirm Password
              </label>
              <div className="relative mt-2">
                <input
                  disabled={isRegistering}
                  type={confirmShowPassword ? "text" : "password"}
                  autoComplete="off"
                  placeholder="Confirm Your Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-primary rounded-lg outline-none focus:border-indigo-600 placeholder-gray-400"
                />
                {confirmShowPassword ? (
                  <Eye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
                    onClick={() => setConfirmShowPassword(false)}
                  />
                ) : (
                  <EyeClosed
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
                    onClick={() => setConfirmShowPassword(true)}
                  />
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isRegistering}
              className={`w-full py-3 text-white text-lg font-medium rounded-full transition mt-4 ${
                isRegistering
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-primary hover:bg-blue-800'
              }`}
            >
              {isRegistering ? 'Signing Up...' : 'Create Account'}
            </button>

            {/* Footer */}
            <p className="text-sm text-center text-gray-600 pt-10">
              Already have an account?{' '}
              <Link
                to={'/auth/login'}
                className="text-primary font-bold hover:underline"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
