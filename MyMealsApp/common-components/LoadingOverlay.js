import { StyleSheet, View, Text } from "react-native";
import { Bounce } from "react-native-animated-spinkit";
import Color from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";

const LoadingOverlay = (props) => {
  return (
    <View style={styles.screen}>
      <Bounce size={48} color={Color.surfaceColor} animating={true}></Bounce>
      <Text
        style={{
          ...GlobalStyle.BodyOne,
          color: Color.surfaceColor,
          marginTop: 8,
        }}
      >
        Loading...
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

export default LoadingOverlay;
