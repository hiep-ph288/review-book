import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";


function Home({ navigation }) {

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  webview: {
    margin: 10,
  },
});
