import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import DrakLightModeChanger from "../common-components/DarkLightModeChanger";
import ImageTitleCard from "../common-components/ImageTitleCard";
import { useSelector } from "react-redux";
import ScreenData from "../common-components/ScreenData";
import Colors from "../constants/Color";
const Categories = ({ navigation }) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const categoryData = useSelector((state) => state.CategoryData.categoryData);
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
      style={{ marginBottom: 15, width: "48%" }}
      onPress={() =>
        navigation.navigate("Category Meals", {
          categoriesID: item.id,
          categoriesName: item.name,
        })
      }
    >
      <ImageTitleCard title={item.name} url={item.url} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.screen}>
      <DrakLightModeChanger />
      <FlatList
        data={categoryData}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
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
export default Categories;
