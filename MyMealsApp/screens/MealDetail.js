import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import { useSelector, useDispatch } from "react-redux";
import DrakLightModeChanger from "../common-components/DarkLightModeChanger";
import { AntDesign } from "@expo/vector-icons";
const MealDetails = ({ route, navigation }) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const categoryData = useSelector((state) => state.CategoryData.categoryData);
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: mode
        ? Colors.backgroundColorDark
        : Colors.backgroundColor,
    },
  });
  const dispatch = useDispatch();
  let mealsData = categoryData.filter(
    (item) => item.id === route.params.parentId
  );

  let isFavorites = mealsData[0].meals.filter(
    (item) => item.id == route.params.categoriesID
  );
  const handleFavorites = () => {
    dispatch({
      type: "CHANGE_CATEGORY_DATA",
      payload: {
        categoryId: route.params.parentId,
        mealId: route.params.categoriesID,
        isFavorites: !isFavorites[0].isFavorites,
      },
    });
  };
  return (
    <View style={styles.screen}>
      <DrakLightModeChanger />
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{
            width: "100%",
            height: 300,
            resizeMode: "cover",
            marginTop: 5,
          }}
          source={{
            uri: route.params.mealImageUrl,
          }}
        />
        <TouchableOpacity
          onPress={handleFavorites}
          style={{
            height: 50,
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            position: "absolute",
            top: 20,
            left: "82%",
            right: 0,
            bottom: 0,
          }}
        >
          <AntDesign
            name="heart"
            size={24}
            color={
              isFavorites[0].isFavorites? Colors.errorColor : Colors.darkTitleTextColor
            }
          />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          style={{
            ...GlobalStyle.Heading,
            color: mode ? Colors.drakNormalTextColor : Colors.normalTextColor,
            paddingHorizontal: 20,
            paddingTop: 20,
            marginBottom: 10,
          }}
        >
          {route.params.categoriesName}
        </Text>
        <Text
          style={{
            ...GlobalStyle.BodyOne,
            color: mode ? Colors.drakNormalTextColor : Colors.normalTextColor,
            marginBottom: 25,
            paddingHorizontal: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus.
        </Text>
      </ScrollView>
    </View>
  );
};
export default MealDetails;
