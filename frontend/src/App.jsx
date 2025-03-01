import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
      return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/login" element={<LoginPage />} />
                  </Routes>
            </div>
      );
}

export default App;
