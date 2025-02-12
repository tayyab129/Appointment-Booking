import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const emailTrimmed = email.trim(); // Trim any spaces in the email

    try {
      // First, check if the email exists in Firebase
      const methods = await fetchSignInMethodsForEmail(auth, emailTrimmed);
      console.log("Methods for this email:", methods);

      if (methods.length === 0) {
        toast.error("User not found with this email address.");
        return;
      }

      // If email exists, proceed with sign-in attempt
      await signInWithEmailAndPassword(auth, emailTrimmed, password);
      toast.success("Logged in successfully!");

      setTimeout(() => {
        navigate("/"); // Navigate to the home page or dashboard
      }, 2000);
    } catch (error) {
      console.error("Error logging in:", error);

      // Specific Firebase error handling
      if (error.code === "auth/user-not-found") {
        toast.error("User not found with this email address.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        toast.error("Too many login attempts. Please try again later.");
      } else {
        toast.error("An unknown error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <form
        className="min-h-[80vh] flex items-center"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-xl font-semibold">Login</p>
          <p>Please log in to book an appointment</p>
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
          <div className="w-full">
            <p>Password</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md text-base"
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-primary underline cursor-pointer"
            >
              Create an account
            </span>
          </p>
          <p>
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-primary underline cursor-pointer"
            >
              Forgot Password
            </span>
          </p>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
