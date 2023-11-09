import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons,FontAwesome5  } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AudioList from "../Componentes/AudioList";
import Playlist from "../Componentes/Playlist";
import Reproductor from "../Componentes/Reproductor";

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Audios" component={AudioList} options={{
        tabBarIcon:()=>{
        <MaterialIcons name="headset" size={24} color="black" />        }
      }} />
      <Tab.Screen name="Reproductor" component={Reproductor} options={{
        tabBarIcon:()=>{
          <FontAwesome5 name="compact-disc" size={24} color="black" />        }
      }}/>
      <Tab.Screen name="Playlist" component={Playlist} options={{
        tabBarIcon:()=>{
          <MaterialIcons name="library-music" size={24} color="black" />        }
      }}/>
    </Tab.Navigator>
  );
};

export default AppNavigation;
