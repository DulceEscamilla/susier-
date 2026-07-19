import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { motion } from 'framer-motion';
import { UserPlus, AlertCircle } from 'lucide-react';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'RESIDENT',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(formData);
      navigate('/security');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al registrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Encabezado */}
        <motion.div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mb-4 shadow-glow-md">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">SUSIER</h1>
          <p className="text-slate-400">Crear Nueva Cuenta</p>
        </motion.div>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-800 rounded-xl p-8 shadow-2xl border border-slate-700"
        >
          {error && (
            <motion.div className="mb-6 p-4 bg-danger-500/10 border border-danger-500/50 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-danger-500" />
              <p className="text-danger-400 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Nombre */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-slate-300 mb-2 font-medium">Nombre</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                placeholder="Juan"
                required
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 font-medium">Apellido</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                placeholder="Pérez"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-slate-300 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
              placeholder="tu@email.com"
              required
            />
          </div>

          {/* Contraseña */}
          <div className="mb-6">
            <label className="block text-slate-300 mb-2 font-medium">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Rol */}
          <div className="mb-6">
            <label className="block text-slate-300 mb-2 font-medium">Tipo de Usuario</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
            >
              <option value="RESIDENT">Residente</option>
              <option value="SECURITY">Guardia de Seguridad</option>
            </select>
          </div>

          {/* Botón */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-glow-md disabled:opacity-50"
          >
            {loading ? 'Registrando...' : 'Crear Cuenta'}
          </motion.button>

          {/* Enlace a login */}
          <p className="text-center text-slate-400 mt-6">
            ¿Ya tienes cuenta?{' '}
            <a href="/login" className="text-primary-400 hover:text-primary-300 font-semibold">
              Inicia sesión
            </a>
          </p>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Register;
