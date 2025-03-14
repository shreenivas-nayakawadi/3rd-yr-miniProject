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
import { Toaster } from "react-hot-toast";

function App() {
      // protect routes that require authentication
      const ProtectedRoute = ({ children }) => {
            const { isAuthenticated } = useAuthStore();

            if (!isAuthenticated) {
                  return <Navigate to="/login" replace />;
            }

            return children;
      };
      const AuthenticatedRoute = ({ children }) => {
            const { isAuthenticated } = useAuthStore();

            if (isAuthenticated) {
                  return <Navigate to="/dashboard" replace />;
            }

            return children;
      };

      return (
            <div className="min-h-screen  bg-gray-100">
                  <Navbar />
                  <Toaster position="top-center" reverseOrder={false} />
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

                              <Route
                                    path="/signup"
                                    element={
                                          <AuthenticatedRoute>
                                                <SignUpPage />
                                          </AuthenticatedRoute>
                                    }
                              />
                              <Route path="/demo" element={<Demo />} />
                              <Route
                                    path="/login"
                                    element={
                                          <AuthenticatedRoute>
                                                <LoginPage />{" "}
                                          </AuthenticatedRoute>
                                    }
                              />
                        </Routes>
                  </div>
            </div>
      );
}

export default App;
