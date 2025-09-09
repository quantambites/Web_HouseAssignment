import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "@/services/auth";
import { useAuth } from "@/services/authContext";
import Apple from "@/assets/apple.png"
import Facebook from "@/assets/facebook.png"
import Google from "@/assets/google.png"
import { Mail, Eye ,EyeClosed } from "lucide-react";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSigningIn) return;
    setIsSigningIn(true);
    try {
      await doSignInWithEmailAndPassword(email, password);
      toast.success("Signed in successfully ✅");
    } catch (err) {
      toast.error(err.message || "Failed to sign in ❌");
      setIsSigningIn(false);
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (isSigningIn) return;
    setIsSigningIn(true);
    try {
      await doSignInWithGoogle();
      toast.success("Google login successful 🎉");
    } catch (err) {
      toast.error(err.message || "Google sign-in failed ❌");
      setIsSigningIn(false);
    }
  };

  if (userLoggedIn) return <Navigate to="/shop/home" replace />;

  return (
    <main className="w-full h-screen flex items-center justify-center ">
      <div className="w-full bg-white text-gray-600 space-y-6 p-8 pt-2 px-24">
        {/* Title */}
        <h3 className="text-black text-4xl font-bold text-center ">Log In</h3>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-md text-gray-700 font-bold">Email Address</label>
            <div className="relative mt-2">
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Id"
                className="w-full px-4 py-3 pr-10 text-sm text-gray-700 bg-transparent border border-primary focus:border-blue-600 rounded-xl shadow-sm outline-none transition duration-300"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          
                {/* Password */}
            <div className="mt-4">
              <label className="text-md text-gray-700 font-bold">Password</label>
              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 pr-10 text-sm text-gray-700 bg-transparent border border-primary focus:border-blue-600 rounded-xl shadow-sm outline-none transition duration-300"
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
          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Remember Me
            </label>
            <Link
              to="/auth/forgot"
              className="text-red-500 font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSigningIn}
            className={`w-full py-3 text-white font-semibold rounded-full ${
              isSigningIn
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-primary hover:bg-blue-800 shadow-lg transition duration-300"
            }`}
          >
            {isSigningIn ? "Signing In..." : "Log In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center text-sm text-gray-500">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-2 text-[10px]">OR CONTINUE WITH</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social buttons */}
        <div className="flex justify-center space-x-4 gap-4">
          {/* Apple */}
          <button className="p-2 bg-white rounded-full  transition">
            <img src={Apple} alt="a" className="w-14 h-14 object-contain" />
          </button>

          {/* Facebook */}
          <button className="p-2 bg-white rounded-full  transition">
            <img src={Facebook} alt="f" className="w-9 h-9 object-contain" />
          </button>

          {/* Google */}
          <button
            disabled={isSigningIn}
            onClick={onGoogleSignIn}
            className="p-2 bg-white rounded-full  transition"
          >
           <img src={Google} alt="g" className="w-14 h-14 object-contain" />
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-sm font-semibold pt-8">
          Doesn’t have an account?{" "}
          <Link
            to="/auth/register"
            className="font-semibold text-primary hover:underline"
          >
            Create One
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
