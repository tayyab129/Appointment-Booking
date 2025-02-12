import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Added missing imports

const cities = [
  { value: "select", label: "Select" },
  { value: "islamabad", label: "Islamabad" },
  { value: "fsd", label: "Faisalabad" },
  { value: "lahore", label: "Lahore" },
  { value: "multan", label: "Multan" },
  { value: "samundri", label: "Samundri" },
  { value: "jaranwala", label: "Jaranwala" },
  { value: "tandlianwala", label: "Tandlianwala" },
  { value: "wazirabad", label: "Wazirabad" },
  { value: "chiniot", label: "Chiniot" },
  { value: "lyallpur", label: "Lyallpur" },
  { value: "khanewal", label: "Khanewal" },
  { value: "tahli", label: "Tahli" },
  { value: "shujaabad", label: "Shujaabad" },
  { value: "mehmoodkot", label: "Mehmoodkot" },
  { value: "jabranwala", label: "Jabranwala" },
  { value: "dunyapur", label: "Dunyapur" },
];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("select");
  const [city, setCity] = useState("select");
  const navigate = useNavigate();
  const db = getFirestore();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // Check if email already exists
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        // If email exists, show error message and toast
        toast.error("An account already exists with this email.");
        return;
      }

      // If email doesn't exist, proceed with signup
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update the user's display name
      await updateProfile(user, { displayName: name });

      // Create a new user document in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        name,
        email,
        phone,
        address,
        gender,
        city,
        createdAt: new Date(), // Timestamp when the account is created
      });

      // Show success message and navigate to profile page
      toast.success(`${name}! Your account has been created successfully!`);

      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      // Log the actual error for debugging
      console.error("Error during signup:", error);

      // Check if the error is related to email already being in use
      if (error.code === "auth/email-already-in-use") {
        toast.error("An account already exists with this email.");
      } else {
        // For other errors, show a generic message
        toast.error("Error: Something went wrong");
      }
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

          {/* Phone */}
          <div className="w-full">
            <p>Phone</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          {/* City */}
          <div className="w-full">
            <p>City</p>
            <select
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            >
              {cities.map((cityOption) => (
                <option key={cityOption.value} value={cityOption.value}>
                  {cityOption.label}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="w-full">
            <p>Address</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>

          {/* Gender */}
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
