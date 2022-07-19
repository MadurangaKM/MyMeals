import React from "react";
import SplashImage from "../assets/splash.gif";
import { StyleSheet, View, Image } from "react-native";
const SplashScreen = (props) => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
  });
  return (
    <View>
      <Image
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "cover",
        }}
        source={SplashImage}
      />
    </View>
  );
};

export default SplashScreen;
