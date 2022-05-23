import { View, StyleSheet, Text } from "react-native";
const Favorites = (props) => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.screen}>
      <Text>Favorites</Text>
    </View>
  );
};
export default Favorites;
