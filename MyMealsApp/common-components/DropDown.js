import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Color";
import ModalDropdown from "react-native-modal-dropdown";
import { GlobalStyle } from "../constants/GlobleStyle";
import { useSelector } from "react-redux";
import { useState } from "react";
const DropDown = (props) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const styles = StyleSheet.create({
    viewStyle: {
      borderColor: props.error
        ? "red"
        : mode
        ? Colors.surfaceColor
        : Colors.borderColor,
      borderWidth: 1,
      padding: 3,
      paddingLeft: 10,
      height: 34,
      marginRight: 6,
      borderRadius: 10,
      width: "100%",
    },
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.viewStyle}>
        <ModalDropdown
          options={props.data}
          onSelect={props.onSelect}
          isFullWidth={true}
          textStyle={{
            ...GlobalStyle.BodyOne,
            color: mode ? Colors.drakNormalTextColor : Colors.normalTextColor,
            paddingTop: 1,
          }}
          dropdownTextStyle={{
            ...GlobalStyle.BodyOne,
            color: mode ? Colors.drakNormalTextColor : Colors.normalTextColor,
            backgroundColor: mode
              ? Colors.backgroundColorDark
              : Colors.backgroundColor,
          }}
          dropdownStyle={{
            backgroundColor: mode
              ? Colors.backgroundColorDark
              : Colors.backgroundColor,
            color: mode ? Colors.drakNormalTextColor : Colors.normalTextColor,
          }}
          dropdownTextHighlightStyle={{
            color: mode ? Colors.drakNormalTextColor : Colors.normalTextColor,
          }}
          defaultValue={props.title}
        />
      </View>
      <Text
        style={{
          marginTop: props.error ? 5 : 0,
          marginBottom: props.error ? 10 : 0,
          color: mode ? Colors.errorColorDarkMode : Colors.errorColor,
          ...GlobalStyle.BodyTwo,
        }}
      >
        {props.errorMessage}
      </Text>
    </View>
  );
};

export default DropDown;
