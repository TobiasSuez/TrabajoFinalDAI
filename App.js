import React from 'react';
import NavBar from './Componentes/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './Navigation/AppNavigation'
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
};

export default App;
