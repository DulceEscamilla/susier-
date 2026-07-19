import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from './src/store/authStore';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import SecurityHomeScreen from './src/screens/Security/SecurityHomeScreen';
import ResidentHomeScreen from './src/screens/Resident/ResidentHomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#0f172a' },
        }}
      >
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : user?.role === 'SECURITY' ? (
          <>
            <Stack.Screen name="Home" component={SecurityHomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={ResidentHomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
