import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useAuthStore } from '../store/authStore';
import { useNavigation } from '@react-navigation/native';

function ResidentHomeScreen() {
  const { user, logout } = useAuthStore();
  const navigation = useNavigation();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login' as never);
  };

  const menuItems = [
    { icon: '🏠', label: 'Mi Domicilio', screen: 'ResidenceInfo' },
    { icon: '🚗', label: 'Mis Vehículos', screen: 'Vehicles' },
    { icon: '📋', label: 'Mis Reportes', screen: 'Reports' },
    { icon: '🔔', label: 'Autorizar Visita', screen: 'AuthorizeVisit' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>SUSIER</Text>
          <Text style={styles.headerSubtitle}>Portal del Residente</Text>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutButton}>🚪</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Info del usuario */}
        <View style={styles.userCard}>
          <Text style={styles.userName}>{user?.firstName} {user?.lastName}</Text>
          <Text style={styles.userRole}>🏠 Residente</Text>
        </View>

        {/* Menú */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Opciones</Text>
          {menuItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.screen as never)}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Paquetes recientes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Paquetes Recientes</Text>
          {[
            { carrier: 'DHL', date: 'Hoy' },
            { carrier: 'FedEx', date: 'Ayer' },
          ].map((pkg, idx) => (
            <View key={idx} style={styles.packageItem}>
              <View>
                <Text style={styles.packageCarrier}>{pkg.carrier}</Text>
                <Text style={styles.packageDate}>{pkg.date}</Text>
              </View>
              <Text style={styles.packageStatus}>Pendiente</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
  logoutButton: {
    fontSize: 28,
  },
  scrollContent: {
    padding: 20,
  },
  userCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#8b5cf6',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  userRole: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  menuItem: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    color: '#cbd5e1',
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 24,
    color: '#94a3b8',
  },
  packageItem: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  packageCarrier: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  packageDate: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
  packageStatus: {
    fontSize: 12,
    color: '#f59e0b',
    fontWeight: 'bold',
  },
});

export default ResidentHomeScreen;
