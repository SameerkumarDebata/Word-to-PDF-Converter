// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";

// const Navbar = () => {
//   const [authUser, setAuthUser] = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setAuthUser(null);
//     localStorage.removeItem("Users");
//     navigate("/login");
//   };

//   return (
//     <div className="fixed top-0 w-full z-50 px-6 py-4 md:px-40 flex justify-between items-center bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
//       <Link to="/" className="text-2xl font-bold tracking-tight text-slate-800 hover:opacity-80 transition-opacity">
//         Word<span className="text-indigo-600">To</span>PDF
//       </Link>

//       <div className="flex items-center space-x-6 font-medium text-slate-600">
//         {!authUser ? (
//           <>
//             <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
//             <Link
//               to="/login"
//               className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-500/20"
//             >
//               Login
//             </Link>
//           </>
//         ) : (
//           <>
//             <Link to="/converter" className="hover:text-indigo-600 transition-colors">Converter</Link>
//             <button
//               onClick={handleLogout}
//               className="px-5 py-2 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition-all"
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem("Users");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-indigo-600">
        WordToPDF
      </Link>

      {/* Menu */}
      <div className="flex gap-6 items-center font-medium">
        <Link to="/" className="hover:text-indigo-600">Home</Link>

        <Link to="/contact" className="hover:text-indigo-600">
          Contact
        </Link>

        {!authUser ? (
          <Link
            to="/login"
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={logout}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
