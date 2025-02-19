import React, { useState } from "react";
import { supabase } from "../../supabase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setError("");
    const emailTrimmed = email.trim().toLowerCase();

    try {
      const { data, error } = await supabase.auth.api.resetPasswordForEmail(
        emailTrimmed,
        { redirectTo: `${window.location.origin}/reset-password` } // Custom reset password page
      );

      if (error) {
        console.error("Error sending reset email:", error);
        setError("No account associated with this email.");
        toast.error("No account found with this email!");
      } else {
        toast.success("Password reset email sent! Check your inbox.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      console.error("Error:", err);
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
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="email"
              placeholder="Enter email"
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
              onClick={() => navigate("/login")}
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
