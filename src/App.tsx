import React from "react";
import LoginForm from "./pages/LoginPage";
import RegisterForm from "./pages/RegisterPage";
import bg from './assets/images/bg.jpeg';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <Router>
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <main>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            </Routes>
          </main>
        </div>
        {/* <div className="relative lg:flex lg:w-1/2 h-full items-center justify-center bg-gray-200">
          <img
            src={bg}
            alt="Grande image"
            className="w-960 h-hull"
          />
        </div> */}
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-transparent">
        <div className="h-60 w-60 bg-gradient-to-tr from-teal-700 to-blue-700 rounded-full animate-bounce"></div>
      </div>
      </div>
    </Router>
  );
}

export default App;
