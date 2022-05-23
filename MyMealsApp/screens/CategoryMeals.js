import { View, StyleSheet, Text, Button } from "react-native";
const CategoryMeals = ({ navigation }) => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.screen}>
      <Text>Categories Meals</Text>
      <Button
        title="Go to MealsDetails"
        onPress={() => navigation.navigate("Meal Details")}
      />
    </View>
  );
};
export default CategoryMeals;
