import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
const ImageTitleCard = (props) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
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
            height: 150,
            resizeMode: "cover",
            borderRadius: 10,
            marginBottom: 10,
          }}
          source={{
            uri: props.url,
          }}
        />
        {props.isFavoriteVisible && (
          <TouchableOpacity
            onPress={props.handleFavorites}
            style={{
              height: 50,
              width: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              position: "absolute",
              top: 35,
              left: "85%",
              right: 0,
              bottom: 0,
            }}
          >
            <AntDesign
              name="heart"
              size={24}
              color={
                props.isFavorite ? Colors.errorColor : Colors.darkTitleTextColor
              }
            />
          </TouchableOpacity>
        )}

        <Text
          numberOfLines={1}
          style={{
            ...GlobalStyle.BodyOneBold,
            color: mode ? Colors.drakNormalTextColor : Colors.normalTextColor,
            marginTop: 5,
          }}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default ImageTitleCard;
