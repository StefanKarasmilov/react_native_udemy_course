import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    paddingVertical: 50,
    paddingHorizontal: 50,
    margin: 50,
    fontSize: 20,
    borderWidth: 10,
    // backgroundColor: 'red'
  }
});

export default BoxObjectModelScreen;
