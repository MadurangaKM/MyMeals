import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import ScreenData from "../common-components/ScreenData";
const CardList = (props) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const screenData = ScreenData();
  const styles = StyleSheet.create({
    root: {
      padding: 20,
      paddingHorizontal: screenData.isLandscape ? 60 : 20,
      paddingBottom: 0,
      paddingTop: 3,
    },
    card: {
      backgroundColor: mode ? Colors.surfaceColorDark : Colors.surfaceColor,
      height: 50,
      alignItems: "center",
      paddingLeft: 15,
      height: 50,
      borderRadius: 5,
      flexDirection: "row",
      marginBottom: 10,
      shadowColor: Colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  });
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <View style={styles.root}>
        <View style={styles.card}>
          <View style={{ flex: 0.8 }}>
            <Text
              style={{
                ...GlobalStyle.BodyOne,
                color: mode
                  ? Colors.drakNormalTextColor
                  : Colors.normalTextColor,
              }}
            >
              {props.value}
            </Text>
          </View>
          <View style={{ flex: 0.2, alignItems: "center" }}>
            <TouchableOpacity
              onPress={props.onPress}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Icon name="delete" size={24} color={Colors.primaryDark} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </IconComponentProvider>
  );
};

export default CardList;
