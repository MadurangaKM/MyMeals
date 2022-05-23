import { View, StyleSheet, Text } from "react-native";
const Filter = (props) => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.screen}>
      <Text>Filter</Text>
    </View>
  );
};
export default Filter;
