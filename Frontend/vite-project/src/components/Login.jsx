// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";

// const Login = () => {
//   const { register, handleSubmit } = useForm();
//   const [, setAuthUser] = useAuth();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     setAuthUser(data);
//     localStorage.setItem("Users", JSON.stringify(data));
//     navigate("/converter");
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="pt-24 flex justify-center">
//       <div className="border p-6 rounded">
//         <input {...register("email")} placeholder="Email" />
//         <input {...register("password")} type="password" placeholder="Password" />
//         <button className="bg-blue-500 text-white px-4 py-2 mt-4">
//           Login
//         </button>
//         <p>
//           New user? <Link to="/signup">Signup</Link>
//         </p>
//       </div>
//     </form>
//   );
// };

// export default Login;


import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setAuthUser(data);
    localStorage.setItem("Users", JSON.stringify(data));
    navigate("/converter");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Login to continue converting files
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              {...register("email", { required: true })}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-md"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
