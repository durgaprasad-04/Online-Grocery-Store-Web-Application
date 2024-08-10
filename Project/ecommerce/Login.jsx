import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../handleApi/userApi";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left"></div>
        <input
          className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded outline-none"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded mt-4 outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm"></div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={async () => {
              await signIn(email, password, setUser, navigate);
            }}
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
