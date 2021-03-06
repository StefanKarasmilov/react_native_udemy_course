import React from "react";
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from "react-native";

// const { width, height } = Dimensions.get("window");

const DimensionesScreen = () => {

  const {width, height} = useWindowDimensions();

  return (
    <View>
    <View style={styles.container}>
      <View style={styles.cajaMorada}/>
      <View style={styles.cajaNaranja}/>
    </View>
      <Text style={styles.title}>W: {width}, H: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red'
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b'
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default DimensionesScreen;
