import React from "react";
import {
  StyleSheet,
  Text,
  Switch,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import Card from "../common-components/Card";
import { useSelector } from "react-redux";

const FilterSwitch = (props) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const styles = StyleSheet.create({
    card: {
      padding: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 60,
    },
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Card style={{ ...props.style, ...styles.card }}>
        <Text
          style={{
            ...GlobalStyle.BodyOne,
            color: mode ? Colors.drakNormalTextColor : Colors.normalTextColor,
          }}
        >
          {props.name}
        </Text>
        <Switch
          value={props.value}
          onValueChange={props.onValueChange}
          thumbColor={
            mode
              ? mode
                ? Colors.primaryDark
                : Colors.primary
              : Colors.drakNormalTextColor
          }
          ios_backgroundColor={
            mode ? Colors.surfaceColorDark : Colors.drakNormalTextColor
          }
          trackColor={{
            false: Colors.borderColor,
            true: mode ? Colors.primary : Colors.primaryGradientColorTwo,
          }}
        />
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default FilterSwitch;
