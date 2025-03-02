import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { useAuthStore } from "./store/authStore";
import { Navigate } from "react-router-dom";

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
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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

                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/login" element={<LoginPage />} />
                  </Routes>
            </div>
      );
}

export default App;
