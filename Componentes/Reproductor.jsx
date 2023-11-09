import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

export default function Reproductor() {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [position, setPosition] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  async function playSound() {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      }
      setIsPlaying(!isPlaying);
    } else {
      console.log("Loading Sound");
      const { sound, status } = await Audio.Sound.createAsync(
        require("../assets/TanBionica-CiudadMágica.mp3"),
        { shouldPlay: true },
        onPlaybackStatusUpdate
      );
      setSound(sound);
      setDuration(status.durationMillis);

      console.log("Playing Sound");
      setIsPlaying(true);
    }
  }

  async function skipToNext() {
    if (sound) {
      // Implementa lógica para saltar a la siguiente canción
    }
  }

  async function skipToPrevious() {
    if (sound) {
      // Implementa lógica para retroceder a la canción anterior
    }
  }

  const onPlaybackStatusUpdate = (status) => {
    if (status.positionMillis && status.durationMillis) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    }
  };

  React.useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setPosition((prevPosition) => prevPosition + 100); // Actualiza la posición cada 100 milisegundos
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
      sound && sound.unloadAsync();
    };
  }, [isPlaying, sound]);

  return (
    <View style={styles.container}>
      {/* Imagen redonda */}
      <Image
        source={require("../assets/Foto1.jpg")} // Reemplaza con la ruta correcta de tu imagen
        style={styles.roundImage}
      />

      <View style={styles.sliderContainer}>
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onSlidingComplete={(value) => setPosition(value)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={skipToPrevious}>
          <AntDesign name="stepbackward" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={playSound}>
          {isPlaying ? (
            <AntDesign name="pause" size={24} color="black" />
          ) : (
            <AntDesign name="play" size={24} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={skipToNext}>
          <AntDesign name="stepforward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
  sliderContainer: {
    width: 200,
    height: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Hace que la imagen sea redonda
    marginBottom: 10, // Ajusta según sea necesario
  },
});
