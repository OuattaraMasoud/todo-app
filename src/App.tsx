import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "./pages/LoginPage";
import RegisterForm from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  
  if (location.pathname === "/home") {
    return (
      <div className="flex w-full h-screen">
        <main className="w-full flex items-center justify-center">
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
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
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-transparent">
        <div className="h-60 w-60 bg-gradient-to-tr from-teal-700 to-blue-700 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default App;
