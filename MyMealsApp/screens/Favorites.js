import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import DrakLightModeChanger from "../common-components/DarkLightModeChanger";
import ImageTitleCard from "../common-components/ImageTitleCard";
import { useSelector, useDispatch } from "react-redux";
import ScreenData from "../common-components/ScreenData";
import Colors from "../constants/Color";
import { useState } from "react";
import { useIsFocused } from "@react-navigation/native";
const Favorites = ({ route, navigation }) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const categoryData = useSelector((state) => state.CategoryData.categoryData);
  const [favorites, setFavorites] = useState(false);
  const dispatch = useDispatch();
  const screenData = ScreenData();
  const isFocused = useIsFocused();
  useEffect(() => {
    setFavorites(true);
  }, [isFocused, favorites]);
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: mode
        ? Colors.backgroundColorDark
        : Colors.backgroundColor,
    },
  });
  const handleFavorites = (id, rootId) => {
    let mealsDataSet = categoryData.filter((item) => item.id === rootId);

    let isFavorites = mealsDataSet[0].meals.filter((item) => item.id == id);
    dispatch({
      type: "CHANGE_CATEGORY_DATA",
      payload: {
        categoryId: rootId,
        mealId: id,
        isFavorites: !isFavorites[0].isFavorites,
      },
    });
    setFavorites(!favorites);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginBottom: 15, width: "100%" }}
      onPress={() =>
        navigation.navigate("Home", {
          screen: "Meal Details",
          params: {
            categoriesID: item.id,
            categoriesName: item.name,
            mealImageUrl: item.url,
            parentId: item.rootId,
          },
        })
      }
    >
      <ImageTitleCard
        title={item.name}
        url={item.url}
        isFavoriteVisible={true}
        isFavorite={item.isFavorites}
        handleFavorites={handleFavorites.bind(this, item.id, item.rootId)}
        favorites={favorites}
        style={{ marginBottom: 10 }}
      />
    </TouchableOpacity>
  );
  let mealsData = categoryData.map((item) => item.meals);
  let merged = [].concat.apply([], mealsData);
  let favoritesData = merged.filter((item) => item.isFavorites === true);

  return (
    <View style={styles.screen}>
      <DrakLightModeChanger />
      {favorites}
      <FlatList
        data={favoritesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{
          padding: 20,
          paddingHorizontal: screenData.isLandscape ? 60 : 20,
          paddingTop: 5,
          marginBottom: 20,
        }}
      />
    </View>
  );
};
export default Favorites;
