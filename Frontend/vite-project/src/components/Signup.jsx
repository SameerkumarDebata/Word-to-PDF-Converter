import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";

const Signup = () => {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // MOCK SIGNUP LOGIC
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        setAuthUser(userInfo);
        localStorage.setItem("Users", JSON.stringify(userInfo));
        navigate("/converter");
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg border border-gray-200">
                <h1 className="text-2xl font-bold text-center text-blue-600">Signup</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Fullname */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                            {...register("fullname", { required: true })}
                        />
                        {errors.fullname && (
                            <span className="text-red-500 text-sm">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* Button */}
                    <div className="flex justify-between items-center text-sm">
                        <p>Have an account? <Link to="/login" className="text-blue-500 hover:underline cursor-pointer">Login</Link></p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 duration-300 pointer"
                    >
                        Signup
                    </button>
                </form>
                <div className="text-center mt-4">
                    <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
