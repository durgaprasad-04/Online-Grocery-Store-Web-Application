import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../handleApi/userApi";

const Register = () => {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left"></div>
        <input
          className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded outline-none"
          type="text"
          placeholder="Username"
          required
          value={userName}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded mt-4 outline-none"
          type="email"
          placeholder="Email Address"
          required
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded mt-4 outline-none"
          type="password"
          placeholder="Password"
          required
          value={userPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm"></div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={async () => {
              await signUp(userName, userEmail, userPassword);
            }}
          >
            Register
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
