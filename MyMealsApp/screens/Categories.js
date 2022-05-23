import { View, StyleSheet, FlatList } from "react-native";
import DrakLightModeChanger from "../common-components/DarkLightModeChanger";
import ImageTitleCard from "../common-components/ImageTitleCard";
import DATA from "../Data";
import { useSelector } from "react-redux";
import ScreenData from "../common-components/ScreenData";
import Colors from "../constants/Color";
const Categories = ({ navigation }) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
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
    <View style={{ marginBottom: 15, width: "48%" }}>
      <ImageTitleCard title={item.name} url={item.url} />
    </View>
  );
  return (
    <View style={styles.screen}>
      <DrakLightModeChanger />
      {/* <Button
        title="Go to Category Meals"
        onPress={() => navigation.navigate("Category Meals")}
      /> */}
      <FlatList
        data={DATA[0].categories}
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
