import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reproductor from './Componentes/Reproductor';
import AudioList from './Componentes/AudioList';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Reproductor" component={Reproductor} />
        <Tab.Screen name="PlayList" component={AudioList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
