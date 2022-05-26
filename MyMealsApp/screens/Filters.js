import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ImageTitleCard from "../common-components/ImageTitleCard";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/Color";
import DrakLightModeChanger from "../common-components/DarkLightModeChanger";
import FilterSwitch from "../common-components/FilterSwitch";
import ScreenData from "../common-components/ScreenData";
import { useState } from "react";
const Filter = ({ route, navigation }) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const [isVegan, setIsVegan] = useState(false);
  const [isGluten, setIsGluten] = useState(false);
  const categoryData = useSelector((state) => state.CategoryData.categoryData);
  const screenData = ScreenData();
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: mode
        ? Colors.backgroundColorDark
        : Colors.backgroundColor,
    },
  });
  const handleFilter = (name) => {
    if (name === "gluten") {
      setIsGluten(!isGluten);
    }
    if (name === "vegan") {
      setIsVegan(!isVegan);
    }
  };
  let mealsData = categoryData.map((item) => item.meals);
  let filterData = [].concat
    .apply([], mealsData)
    .filter((item) => item.isGluten === isGluten && item.isVegan === isVegan);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginBottom: 15, width: "100%" }}
      onPress={() =>
        navigation.navigate("Meal Details", {
          categoriesID: item.id,
          categoriesName: item.name,
          mealImageUrl: item.url,
          parentId: item.rootId,
        })
      }
    >
      <ImageTitleCard
        title={item.name}
        url={item.url}
        isFavoriteVisible={true}
        isFavorite={item.isFavorites}
        handleFavorites={handleFavorites.bind(
          this,
          item.id,
          item.rootId,
          item.isFavorites
        )}
      />
    </TouchableOpacity>
  );

  const handleFavorites = (id, rootId, isFavorites) => {
    dispatch({
      type: "CHANGE_CATEGORY_DATA",
      payload: {
        categoryId: rootId,
        mealId: id,
        isFavorites: !isFavorites,
      },
    });
  };
  return (
    <View style={styles.screen}>
      <DrakLightModeChanger />
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: screenData.isLandscape ? 60 : 20,
          paddingTop: 0,
        }}
      >
        <FilterSwitch
          name={"Gluten"}
          style={{ flex: 0.49 }}
          value={isGluten}
          onValueChange={handleFilter.bind(this, "gluten")}
        />
        <FilterSwitch
          name={"Vegan"}
          style={{ flex: 0.49 }}
          value={isVegan}
          onValueChange={handleFilter.bind(this, "vegan")}
        />
      </View>
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={filterData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{
            padding: 20,
            paddingHorizontal: screenData.isLandscape ? 60 : 20,
            paddingTop: 10,
            marginBottom: 20,
          }}
        />
      </View>
    </View>
  );
};
export default Filter;
