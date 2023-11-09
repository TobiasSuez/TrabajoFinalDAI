import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AudioList} from '../Componentes/AudioList'
import {Playlist} from '../Componentes/Playlist'
import {Reproductor} from '../Componentes/Reproductor'

const Tab=createBottomTabNavigator()
const AppNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='AudioList' component={AudioList}/>
        <Tab.Screen name='Reproductor' component={Reproductor}/>
        <Tab.Screen name='Playlist' component={Playlist}/>
    </Tab.Navigator>

  );
};


export default Playlist;
