"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import GoogleIcon from "@/public/google.svg";
import Microsoft from "@/public/microsoft.svg";
import Apple from "@/public/apple.svg";
import Image from "next/image";
import styles from "@/app/styles.module.css";

function SignUpLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", server: "" });
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false); // Track if email input has been interacted with
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", server: "" };

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailTouched) {
      if (!email) {
        newErrors.email =
          "Please enter a valid email address or mobile number.";
        isValid = false;
      } else if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address.";
        isValid = false;
      }
    }
    // password validation

    if (passwordTouched) {
      if (!password) {
        newErrors.password = "Password must be 6 characters or more.";
        isValid = false;
      } else if (password.length < 6) {
        newErrors.password = "Password must be 6 characters or more.";
        isValid = false;
      }
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventdefault();
    if (!validateForm()) return;

    const endPoint = isSignUp ? "/api/users/register" : "/api/users/login";

    try {
      const res = await axios.post(endPoint, { email, password });
      console.log("Success", res.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setErrors({
        ...errors,
        server: error.response?.data?.message || "An error occurred.",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // using for live validation
  useEffect(() => {
    if (emailTouched || passwordTouched) {
      validateForm();
    }
    // Call the async function
  }, [email, password, emailTouched, passwordTouched]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a66c2]">
      <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        <button
          className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 mb-4
             hover:bg-gray-50 hover:border-gray-400 
             focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
             transition-colors duration-200"
        >
          <Image
            className="mr-2 object-contain"
            src={Apple}
            alt="Apple Logo"
            width={24}
            height={24}
          />
          {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
        </button>

        <div className="text-center text-gray-300 mb-4">or</div>
        <div>
          {errors.server && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {errors.server}
            </p>
          )}

          <div className="mb-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailTouched(true)}
              className={`w-full border ${
                errors.email
                  ? `border-red-500 ${styles.inputError}`
                  : "border-gray-300"
              } rounded py-2 px-3  focus:outline-none focus:ring-2`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="relative">
              <input
                autoComplete="new-password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordTouched(true)}
                className={`w-full border ${
                  errors.password
                    ? `border-red-500 ${styles.inputError}`
                    : "border-gray-300"
                } rounded py-2 px-3  focus:outline-none focus:ring-2`}
              />

              <button
                onClick={togglePasswordVisibility}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-0.5  rounded-full text-sm transition-colors font-semibold  ${
                  showPassword
                    ? "text-[#006097] hover:bg-[#d0e8ff] focus:bg-[#d0e8ff] hover:border hover:border-[#0a66c2] focus:border focus:border-[#0a66c2] active:text-blue-900"
                    : "text-[#006097] hover:bg-[#d0e8ff] focus:bg-[#d0e8ff] hover:border hover:border-[#0a66c2] focus:border focus:border-[#0a66c2] active:text-blue-900"
                }`}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {!isSignUp && (
            <div className="text-right mb-4">
              <Link href="/forget-password" className="text-blue-500 text-sm">
                Forget Password
              </Link>
            </div>
          )}

          <div className="flex items-center mb-4">
            {/* Your component with improved checkbox */}
            <input
              type="checkbox"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(!keepLoggedIn)}
              className={`w-4 h-4 border border-gray-300 rounded bg-white mr-2 p-2 transition-colors cursor-pointer appearance-none ${styles.devcustomCheckbox}`}
            />

            <label className="text-sm">Keep Me Logged In</label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#0a66c2] text-white font-semibold transition hover:bg-[#004182] p-2.5 rounded-full"
          >
            {isSignUp ? "Agree & Join" : "Sign in"}
          </button>
        </div>
        {isSignUp && (
          <p className="text-sm text-gray-500 mt-4 text-justify">
            By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
            <Link
              href="/user-agreement"
              className="text-blue-500 font-semibold"
            >
              User Agreement
            </Link>
            ,{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-500 font-semibold"
            >
              Privacy Policy
            </Link>
            , and{" "}
            <Link href="/cookie-policy" className="text-blue-500 font-semibold">
              Cookie Policy
            </Link>
            .
          </p>
        )}
        <div className="text-center text-gray-300 mb-4">or</div>

        {/* // Google Icon */}
        <button
          className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 mb-4
             hover:bg-gray-50 hover:border-gray-400 
             focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
             transition-colors duration-200"
        >
          <Image
            className="mr-2 object-contain"
            src={GoogleIcon}
            alt="Google Logo"
            width={24}
            height={24}
          />
          {isSignUp ? "Continue With Google" : "Sign In With Google"}
        </button>
        {/* // MicroSoft icon */}
        <button
          className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 mb-4
             hover:bg-gray-50 hover:border-gray-400 
             focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
            "
        >
          <Image
            className="mr-2 object-contain"
            src={Microsoft}
            alt="MicroSoft Logo"
            width={24}
            height={24}
          />
          {isSignUp ? "Continue With Microsoft" : "Sign In With Microsoft"}
        </button>
        <div className="text-center mt-4">
          <p className="text-sm">
            {isSignUp ? "Already on LinkedIn?" : "New to LinkedIn?"}{" "}
            <button
              className="text-[#006097] font-semibold p-2 rounded-full hover:bg-[#d0e8ff] focus:bg-[#d0e8ff] hover:underline hover:border-[#0a66c2] focus:border focus:border-[#0a66c2] active:text-blue-900"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign in" : "Join Now"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpLoginPage;
