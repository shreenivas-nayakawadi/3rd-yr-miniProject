import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { useAuthStore } from "./store/authStore";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import Demo from "./pages/Demo";

function App() {
      // protect routes that require authentication
      const ProtectedRoute = ({ children }) => {
            const { isAuthenticated } = useAuthStore();

            if (!isAuthenticated) {
                  return <Navigate to="/login" replace />;
            }

            return children;
      };

      return (
            <div className="min-h-screen  bg-gray-100">
                  <Navbar />
                  <div className="p-2 flex flex-col items-center justify-center">
                        <Routes>
                              <Route path="/" element={<Home />} />

                              <Route
                                    path="/dashboard"
                                    element={
                                          <ProtectedRoute>
                                                <DashboardPage />
                                          </ProtectedRoute>
                                    }
                              />
                              <Route
                                    path="/user"
                                    element={
                                          <ProtectedRoute>
                                                <UserPage />
                                          </ProtectedRoute>
                                    }
                              />

                              <Route path="/signup" element={<SignUpPage />} />
                              <Route path="/demo" element={<Demo />} />
                              <Route path="/login" element={<LoginPage />} />
                        </Routes>
                  </div>
            </div>
      );
}

export default App;
