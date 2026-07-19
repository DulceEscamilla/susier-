import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';
import { LogOut, BarChart3, Users, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">SUSIER</h1>
            <p className="text-slate-400 text-sm">Panel de Administración</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white font-semibold">{user?.firstName} {user?.lastName}</p>
              <p className="text-slate-400 text-sm">👨‍💼 Administrador</p>
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
          {/* KPIs */}
          {[
            { icon: Users, label: 'Guardias', value: '15', change: '+2 este mes' },
            { icon: BarChart3, label: 'Residentes', value: '120', change: '+5 este mes' },
            { icon: TrendingUp, label: 'Visitas', value: '542', change: '+12% vs mes anterior' },
            { icon: Zap, label: 'Alertas Activas', value: '3', change: 'Críticas: 1' },
          ].map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-md hover:border-primary-500 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <kpi.icon className="w-8 h-8 text-primary-400" />
              </div>
              <p className="text-slate-400 text-sm mb-2">{kpi.label}</p>
              <p className="text-3xl font-bold text-white mb-2">{kpi.value}</p>
              <p className="text-slate-500 text-xs">{kpi.change}</p>
            </motion.div>
          ))}
        </div>

        {/* Gráficos y análisis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-6">Desempeño de Guardias</h3>
            <div className="space-y-4">
              {[
                { name: 'Carlos López', score: 95 },
                { name: 'María García', score: 87 },
                { name: 'Juan Pérez', score: 82 },
              ].map((guard, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <p className="text-slate-300">{guard.name}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${guard.score}%` }}
                        transition={{ delay: idx * 0.2, duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      />
                    </div>
                    <p className="text-white font-semibold w-10 text-right">{guard.score}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-6">Actividad Reciente</h3>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {[
                { action: 'Visita registrada', time: 'Hace 5 min', user: 'Carlos López' },
                { action: 'Paquete recibido', time: 'Hace 15 min', user: 'María García' },
                { action: 'Rondín completado', time: 'Hace 30 min', user: 'Juan Pérez' },
              ].map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 pb-4 border-b border-slate-700 last:border-0"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white font-semibold">{activity.action}</p>
                    <p className="text-slate-400 text-sm">{activity.user}</p>
                  </div>
                  <span className="text-slate-500 text-xs whitespace-nowrap">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminDashboard;
