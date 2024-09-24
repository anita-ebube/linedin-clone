import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Index  from "../pages/Index"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import Protected from "../components/Protected";

const LandingPage = () => {
  return (
    <div className="">
      <AuthContextProvider>
        <Router>
          <Routes>
            {/* Landing Page Route */}
            <Route
              path="/"
              element={
                <div className="bg-white">
                  <NavBar />
                  <Hero />
                </div>
              }
            />

            {/* SignIn Route */}
            <Route path="/SignIn" element={<SignIn />} />

            {/* SignUp Route */}
            <Route path="/SignUp" element={<SignUp />} />
            <Route
              path="/Index"
              element={
                <Protected>
                  <Index />
                  {/* <Index /> */}
                </Protected>
              }
            />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
};

export default LandingPage;
