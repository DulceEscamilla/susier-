import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';
import { LogOut, BarChart3, Users, Package, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SecurityDashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">SUSIER</h1>
            <p className="text-slate-400 text-sm">Dashboard de Seguridad</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white font-semibold">{user?.firstName} {user?.lastName}</p>
              <p className="text-slate-400 text-sm">👮 Guardia</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <LogOut className="w-6 h-6 text-slate-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Tarjetas de estadísticas */}
          {[
            { icon: Users, label: 'Visitas Hoy', value: '12', color: 'from-blue-500 to-cyan-500' },
            { icon: Package, label: 'Paquetes', value: '8', color: 'from-purple-500 to-pink-500' },
            { icon: AlertCircle, label: 'Alertas', value: '2', color: 'from-orange-500 to-red-500' },
            { icon: BarChart3, label: 'Rondines', value: '5', color: 'from-green-500 to-emerald-500' },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${card.color} p-6 rounded-xl shadow-lg border border-white/10`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">{card.label}</p>
                  <p className="text-3xl font-bold text-white">{card.value}</p>
                </div>
                <card.icon className="w-12 h-12 text-white/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Acciones rápidas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Registrar Visita', icon: Users },
              { label: 'Escanear QR', icon: AlertCircle },
              { label: 'Registrar Paquete', icon: Package },
            ].map((action, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-glow-md transition-all flex items-center justify-center gap-2"
              >
                <action.icon className="w-5 h-5" />
                {action.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SecurityDashboard;
