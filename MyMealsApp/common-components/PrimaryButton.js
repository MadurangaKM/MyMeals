import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import { Ionicons } from "@expo/vector-icons";

const Button = (props) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: props.isBorder ? "transparent" : Colors.primary,
      height: 38,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      flexDirection: "row",
      borderColor: props.isBorder ? Colors.primaryDark : "transparent",
      borderWidth: props.isBorder ? 1 : 0,
      // borderStyle: props.isBorder ? "dashed" : "hidden",
    },
  });
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.button, ...props.style }}
    >
      {props.isIcon && (
        <Ionicons
          name={props.iconName}
          size={18}
          color={
            props.isBorder ? Colors.primaryDark : Colors.drakNormalTextColor
          }
          style={props.iconOnly ? {} : { marginRight: 4 }}
        />
      )}
      <Text
        style={{
          color: props.isBorder
            ? Colors.primaryDark
            : Colors.drakNormalTextColor,
          paddingTop: Platform.OS === "android" ? 3 : 0,
          ...GlobalStyle.ButtonText,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
