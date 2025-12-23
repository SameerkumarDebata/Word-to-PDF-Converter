import React from "react";
import { Link } from "react-router-dom";
import { FaFileWord } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 px-6 md:px-40 bg-gradient-to-b from-slate-50 to-indigo-50/50">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Convert Word to <span className="text-indigo-600 inline-block transform hover:scale-105 transition-transform">PDF</span>
            <br />
            <span className="text-3xl md:text-4xl text-slate-500 font-medium">Instantly & Securely</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            The most elegant solution for your document needs. Fast, free, and designed for simplicity. No registration required for basic use.
          </p>

          <Link
            to="/login"
            className="btn-primary inline-flex items-center gap-3 text-lg"
          >
            Relative Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative glass-panel p-12 rounded-3xl animate-float">
            <FaFileWord className="text-9xl text-indigo-600 drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
