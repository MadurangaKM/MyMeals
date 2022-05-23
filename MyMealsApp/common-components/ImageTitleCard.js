import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import { useSelector } from "react-redux";
import ScreenData from "../common-components/ScreenData";
const ImageTitleCard = (props) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const screenData = ScreenData();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: mode ? Colors.surfaceColorDark : Colors.surfaceColor,
      borderRadius: 10,
      shadowColor: Colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      padding: 20,
    },
  });
  return (
    <View style={styles.screen}>
      <View style={{ ...styles.card, ...props.style }}>
        <Image
          style={{
            height: 100,
            resizeMode: "cover",
            borderRadius: 10,
            marginBottom: 10,
          }}
          source={{
            uri: props.url,
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            ...GlobalStyle.BodyOneBold,
            color: mode ? Colors.drakNormalTextColor : Colors.normalTextColor,
          }}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default ImageTitleCard;
