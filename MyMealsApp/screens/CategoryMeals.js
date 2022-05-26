import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import DrakLightModeChanger from "../common-components/DarkLightModeChanger";
import ImageTitleCard from "../common-components/ImageTitleCard";
import { useSelector, useDispatch } from "react-redux";
import ScreenData from "../common-components/ScreenData";
import Colors from "../constants/Color";
const CategoryMeals = ({ route, navigation }) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const categoryData = useSelector((state) => state.CategoryData.categoryData);
  const dispatch = useDispatch();
  const screenData = ScreenData();
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: mode
        ? Colors.backgroundColorDark
        : Colors.backgroundColor,
    },
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginBottom: 15, width: "100%" }}
      onPress={() =>
        navigation.navigate("Meal Details", {
          categoriesID: item.id,
          categoriesName: item.name,
          mealImageUrl: item.url,
          parentId: route.params.categoriesID,
        })
      }
    >
      <ImageTitleCard
        title={item.name}
        url={item.url}
        isFavoriteVisible={true}
        isFavorite={item.isFavorites}
        handleFavorites={handleFavorites.bind(this, item.id)}
      />
    </TouchableOpacity>
  );
  let mealsData = categoryData.filter(
    (item) => item.id === route.params.categoriesID
  );

  const handleFavorites = (id) => {
    let mealsDataSet = categoryData.filter(
      (item) => item.id === route.params.categoriesID
    );

    let isFavorites = mealsDataSet[0].meals.filter((item) => item.id == id);
    dispatch({
      type: "CHANGE_CATEGORY_DATA",
      payload: {
        categoryId: route.params.categoriesID,
        mealId: id,
        isFavorites: !isFavorites[0].isFavorites,
      },
    });
  };
  return (
    <View style={styles.screen}>
      <DrakLightModeChanger />
      <FlatList
        data={mealsData ? mealsData[0].meals : []}
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
export default CategoryMeals;
