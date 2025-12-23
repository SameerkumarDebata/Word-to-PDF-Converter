import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Converter from "./components/Converter";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser] = useAuth();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/converter"
          element={authUser ? <Converter /> : <Navigate to="/login" />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

