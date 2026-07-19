import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Login from './pages/Login';
import Register from './pages/Register';
import SecurityDashboard from './pages/Security/SecurityDashboard';
import ResidentDashboard from './pages/Resident/ResidentDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';

function App() {
  const { user } = useAuthStore();

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas por rol */}
        {user?.role === 'SECURITY' && (
          <Route path="/security/*" element={<SecurityDashboard />} />
        )}
        {user?.role === 'RESIDENT' && (
          <Route path="/resident/*" element={<ResidentDashboard />} />
        )}
        {user?.role === 'ADMIN' && (
          <Route path="/admin/*" element={<AdminDashboard />} />
        )}

        {/* Redirecciones */}
        <Route
          path="/"
          element={
            user ? (
              <Navigate
                to={`/${user.role.toLowerCase()}${user.role === 'SECURITY' ? '' : ''}`}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
