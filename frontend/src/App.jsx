import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
      return (
            <div className="container flex items-center justify-center h-screen bg-gray-200">
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/login" element={<LoginPage />} />
                  </Routes>
            </div>
      );
}

export default App;
