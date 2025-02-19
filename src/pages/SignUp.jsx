import React, { useState } from "react";
import { supabase } from "../../supabase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { user, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        if (signupError.message.includes("duplicate key value")) {
          toast.error("Email already exists, please log in.");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
        return;
      }

      if (!user) {
        toast.error("Something went wrong. Please try again later.");
        return;
      }

      const { data: userData, error: insertError } = await supabase
        .from("users")
        .insert([
          {
            id: user.id,
            name,
            email,
            phone,
            address,
            gender,
            city,
            created_at: new Date().toISOString(),
          },
        ]);

      if (insertError) {
        toast.error("Something went wrong. Please try again later.");
        return;
      }

      toast.success(
        `${name}, your account has been created successfully! Please check your inbox to confirm your email address.`
      );
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Something went wrong. Please try again later.");
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
              required
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
              required
            />
          </div>

          {/* Phone */}
          <div className="w-full flex gap-3">
            <div className="w-full">
              <p>Phone</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>

            {/* City */}
            <div className="w-full">
              <p>City</p>
              <select
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required
              >
                {cities.map((cityOption) => (
                  <option key={cityOption.value} value={cityOption.value}>
                    {cityOption.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="w-full flex gap-3">
            <div className="w-full">
              <p>Address</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
              />
            </div>

            {/* Gender */}
            <div className="w-full">
              <p>Gender</p>
              <select
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
              >
                <option value="select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Password */}
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
