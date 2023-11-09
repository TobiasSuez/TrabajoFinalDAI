import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const NavBar = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Barra de navegación */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60, backgroundColor: 'lightgray' }}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Ionicons name="headset-outline" size={24} color="black" />
          <Text>Audios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center' }}>
          <SimpleLineIcons name="music-tone-alt" size={24} color="black" />
          <Text>Reproductor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center' }}>
          <SimpleLineIcons name="playlist" size={24} color="black" />
          <Text>Playlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;
