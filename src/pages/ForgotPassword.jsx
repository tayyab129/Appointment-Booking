import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // For error message
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setError(""); // Reset error state before checking

    const emailTrimmed = email.trim().toLowerCase(); // Trim and lower case the email

    try {
      // Check if the email exists
      const methods = await fetchSignInMethodsForEmail(auth, emailTrimmed);
      console.log("Methods for email:", methods); // Log the methods returned by Firebase

      if (methods.length === 0) {
        console.log("No sign-in methods for this email"); // Log if no sign-in methods are found
        setError("No account associated with this email.");
        toast.error("No account found with this email!");
        return;
      }

      // Send reset email if account exists
      await sendPasswordResetEmail(auth, emailTrimmed);
      toast.success("Password reset email sent! Check your inbox.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error sending reset email:", error);
      if (error.code) {
        console.error("Firebase error code:", error.code); // Log the Firebase error code
      }
      toast.error("Error: Something went wrong.");
    }
  };

  return (
    <>
      <form
        className="min-h-[80vh] flex items-center"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-xl font-semibold">Forgot Password</p>
          <p>Enter your email to receive a password reset link</p>
          <div className="w-full">
            <p>Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md text-base"
          >
            Send Reset Link
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <p>
            Remember your password?{" "}
            <span
              onClick={() => navigate("/login")} // Navigate to login page
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
