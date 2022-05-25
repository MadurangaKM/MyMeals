import React from "react";
import {
  StyleSheet,
  Text,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import ScreenData from "../common-components/ScreenData";
import { Ionicons } from "@expo/vector-icons";
const Header = (props) => {
  const screenData = ScreenData();
  const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: screenData.isLandscape ? 50 : Platform.OS === "ios" ? 100 : 80,
      paddingTop: screenData.isLandscape ? 0 : Platform.OS === "ios" ? 30 : 0,
      backgroundColor: "red",
      alignItems: "center",
      flexDirection: "row",
    },
    title: {
      color: Colors.drakNormalTextColor,
    },
  });
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[
        Colors.primaryGradientColorOne,
        Colors.primaryGradientColorTwo,
        Colors.primaryGradientColorThree,
      ]}
      style={styles.header}
    >
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          flex: 0.13,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        {props.isBack && (
          <Ionicons
            name="arrow-back"
            size={24}
            color={Colors.drakNormalTextColor}
          />
        )}
         {props.isMenu && (
          <Ionicons
            name="ios-menu"
            size={24}
            color={Colors.drakNormalTextColor}
          />
        )}
      </TouchableOpacity>
      <View
        style={{
          flex: 0.87,
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "12%",
        }}
      >
        <Text style={{ ...styles.title, ...GlobalStyle.Heading }}>
          {props.name}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
