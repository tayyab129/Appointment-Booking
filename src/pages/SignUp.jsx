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
  const navigate = useNavigate(); 

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; 

      await updateProfile(user, {
        displayName: name,
      });

      toast.success(`${name}! Your account has been created successfully!`);
      
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
    } catch (error) {
      toast.error(`Error: Something Went Wrong`);
    }
  };

  return (
    <>
      <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-xl font-semibold">Sign Up</p>
          <p>Please create an account to book an appointment</p>
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
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
