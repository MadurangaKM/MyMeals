import { View, StyleSheet, Text } from "react-native";
const MealDetails = (props) => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.screen}>
      <Text>Meal Details</Text>
    </View>
  );
};
export default MealDetails;
