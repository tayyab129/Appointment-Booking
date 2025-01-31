import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("select");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

      console.log("Phone:", phone);
      console.log("Address:", address);
      console.log("Gender:", gender);

      toast.success(`${name}! Your account has been created successfully!`);

      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      toast.error(`Error: Something Went Wrong`);
    }
  };

  return (
    <>
      <form
        className="min-h-[80vh] flex items-center"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col gap-3 m-auto items-start p-8 w-[640px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-xl font-semibold">Sign Up</p>
          <p>Please create an account to book an appointment</p>

          {/* Full Name */}
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          {/* Email */}
          <div className="w-full">
            <p>Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* Phone (additional field) */}
          <div className="w-full">
            <p>Phone</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          {/* Address (additional field) */}
          <div className="w-full">
            <p>Address</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>

          {/* Gender (additional field) */}
          <div className="w-full">
            <p>Gender</p>
            <select
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option value="select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Password */}
          <div className="w-full">
            <p>Password</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md text-base mt-4"
          >
            Sign Up
          </button>

          <p>
            Already have an account?{" "}
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

export default Signup;
