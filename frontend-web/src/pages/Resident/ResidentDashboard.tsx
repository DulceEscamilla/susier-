import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';
import { LogOut, Home, FileText, Bell, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ResidentDashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-secondary-900 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">SUSIER</h1>
            <p className="text-slate-400 text-sm">Portal del Residente</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white font-semibold">{user?.firstName} {user?.lastName}</p>
              <p className="text-slate-400 text-sm">🏠 Residente</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tarjetas de opciones */}
          {[
            { icon: Home, label: 'Mi Domicilio', color: 'from-blue-500 to-cyan-500' },
            { icon: Bell, label: 'Autorizar Visitas', color: 'from-purple-500 to-pink-500' },
            { icon: FileText, label: 'Mis Reportes', color: 'from-orange-500 to-red-500' },
            { icon: Calendar, label: 'Reservar Áreas', color: 'from-green-500 to-emerald-500' },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${card.color} p-8 rounded-xl shadow-lg border border-white/10 cursor-pointer hover:shadow-glow-lg transition-all`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <card.icon className="w-12 h-12 text-white" />
                <h3 className="text-xl font-bold text-white">{card.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paquetes recientes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-slate-800/50 border border-slate-700 rounded-xl p-8 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Paquetes Recientes</h2>
          <div className="space-y-4">
            {[
              { carrier: 'DHL', date: 'Hoy', status: 'Pendiente' },
              { carrier: 'FedEx', date: 'Ayer', status: 'Entregado' },
            ].map((pkg, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-primary-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div>
                  <p className="font-semibold text-white">{pkg.carrier}</p>
                  <p className="text-slate-400 text-sm">{pkg.date}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  pkg.status === 'Entregado'
                    ? 'bg-success-500/20 text-success-400'
                    : 'bg-warning-500/20 text-warning-400'
                }`}>
                  {pkg.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ResidentDashboard;
