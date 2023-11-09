import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const Playlist = () => {
  return (
    <View>
      <Text>Play List</Text>
    </View>
  );
};

const style =StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItem: 'center'
    }
})

export default Playlist;
