import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const PlaylistScreen = () => {
  const [playlist, setPlaylist] = useState([
    {
      id: '1',
      title: 'Track 1',
      url: require('../assets/Rick Astley - Never Gonna Give You Up.mp3'),
    },
    {
      id: '2',
      title: 'Track 2',
      url: require('../assets/TanBionica-CiudadMágica.mp3'),
    },
    // Agrega más pistas según sea necesario
  ]);

  useEffect(() => {
    // Configura TrackPlayer
    TrackPlayer.setupPlayer().then(async () => {
      // Agrega las pistas a la biblioteca de TrackPlayer
      await TrackPlayer.add(playlist);
    });
  }, []);

  const playTrack = async (trackId) => {
    // Reproduce la pista seleccionada
    await TrackPlayer.skip(trackId);
    await TrackPlayer.play();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => playTrack(item.id)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={playlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PlaylistScreen;
