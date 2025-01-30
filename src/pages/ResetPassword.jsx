import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { confirmPasswordReset } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const oobCode = urlParams.get("oobCode");

    if (!oobCode) {
      setError("Invalid password reset link.");
    }
  }, [location]);

  const handlePasswordReset = async (e) => {
    e.preventDefault(); // Prevent form default behavior

    const urlParams = new URLSearchParams(location.search);
    const oobCode = urlParams.get("oobCode");

    if (!oobCode) {
      setError("Invalid password reset link.");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      toast.success("Password has been successfully reset!");
      navigate("/login");
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    }
  };

  return (
    <>
      <form
        className="min-h-[80vh] flex items-center justify-center bg-gray-50"
        onSubmit={handlePasswordReset}
      >
        <div className="flex flex-col gap-5 p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg bg-white">
          <p className="text-2xl font-semibold text-center">Reset Password</p>
          <h2 className="text-lg text-center">Enter your new password below</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="w-full">
            <label className="text-sm text-gray-700">New Password</label>
            <input
              type="password"
              className="border border-zinc-300 rounded w-full p-2 mt-2"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white w-full py-2 mt-4 rounded-md text-base hover:bg-primary-dark transition-all"
          >
            Reset Password
          </button>
          <p className="text-center mt-4">
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

export default ResetPassword;
